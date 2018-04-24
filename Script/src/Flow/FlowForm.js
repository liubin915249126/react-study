import React from 'react';
import { Button, Spin, Icon, message, Row, Col } from 'antd';
import LoanFlowItem from './FlowItem';
// import { getFlow, saveFlow, uploadimg, loadflowurl, getFlowTemplate } from '../../services/loan';
import { deepClone } from '../utils/utils';
import FlowTemplate from './FlowTemplate';
import styles from './flow.less';

class FlowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      flowLists: {
        APPLY: [],
        AUDIT: [],
      },
      flowTemplate: {
        APPLY: [],
        AUDIT: [],
      },
      applyFlag: false,
      auditFlag: false,
      selectKeys: {
        APPLY: [],
        AUDIT: [],
      },
    };
  }
  componentDidMount() {
    // this.loadFlowData(this.loadFlowTemplate);
  }
  onSelectChange(selectedRowKeys, selectedRows, type) {
    const { flowLists, flowTemplate } = this.state;
    this.reRenderFlowLists(flowLists, selectedRowKeys, type, flowTemplate);
  }
  reRenderFlowLists(flowLists, selectedRowKeys, type, flowTemplate) {
    // const selectKeys = deepClone(this.state.selectKeys);
    const flowListsCopy = deepClone(flowLists);
    // const selectedFlowIds = this.selectedRowKeysToId(selectedRowKeys, flowTemplate, type);
    const { addRows, deleteRows, selectKeys } = this.compareSelectKeys(type, selectedRowKeys);
    flowListsCopy[type] = [...flowLists[type], ...addRows];
    if (Array.isArray(deleteRows) && deleteRows.length > 0) {
      deleteRows.forEach((deleteRow) => {
        const current = flowListsCopy[type].findIndex((newflowList) => { return newflowList.icon === deleteRow.icon; });
        if (current >= 0) {
          flowListsCopy[type].splice(current, 1);
        }
      });
    }
    this.setState({ selectKeys, flowLists: flowListsCopy });
  }
  compareSelectKeys(type, selectedRowKeys) {
    const { flowTemplate } = this.state;
    const selectKeys = deepClone(this.state.selectKeys);
    const addKeys = [];
    const deleteKeys = [];
    const addRows = [];
    const deleteRows = [];
    selectedRowKeys.forEach((selectedRowKey) => {
      const current = selectKeys[type].findIndex((selectKey) => { return selectKey === selectedRowKey; });
      if (current === -1) {
        addKeys.push(selectedRowKey);
      }
    });
    selectKeys[type].forEach((selectKey) => {
      const current = selectedRowKeys.findIndex((selectedRowKey) => { return selectKey === selectedRowKey; });
      if (current === -1) {
        deleteKeys.push(selectKey);
      }
    });
    addKeys.forEach((addkey) => {
      flowTemplate[type].forEach((flow, index) => {
        if (addkey === index) {
          addRows.push(flow);
        }
      });
    });
    deleteKeys.forEach((addkey) => {
      flowTemplate[type].forEach((flow, index) => {
        if (addkey === index) {
          deleteRows.push(flow);
        }
      });
    });
    selectKeys[type] = selectedRowKeys;
    return { addKeys, deleteKeys, addRows, deleteRows, selectKeys };
  }
  selectedRowKeysToId(selectedRowKeys, flowTemplate, type) {
    const selectedFlowIds = selectedRowKeys.map((selectedRowKey) => {
      let selectedFlowId = -1;
      flowTemplate[type].forEach((data, index) => {
        if (selectedRowKey === index) {
          selectedFlowId = data.id;
        }
      });
      if (selectedFlowId) {
        return selectedFlowId;
      }
    });
    return selectedFlowIds;
    this.setState({});
  }
  async loadFlowTemplate(that) {
    that.setState({ spinning: true });
    try {
      const res = await getFlowTemplate();
      that.dealFlowData(res, 'flowTemplate', that.checkFlowData);
    } catch (error) {
      console.log(error);
    }
    that.setState({ spinning: false });
  }
  async loadFlowData(callback) {
    const { loanId } = this.props;
    this.setState({ spinning: true });
    try {
      const res = await getFlow(loanId);
      this.dealFlowData(res, 'flowLists', callback);
    } catch (err) {
      console.log(err);
    }
    this.setState({ spinning: false });
  }
  checkFlowData(that) {
    const { flowLists, flowTemplate } = that.state;
    const { APPLY, AUDIT } = flowLists;
    if (!(Array.isArray(APPLY) && APPLY.length > 0)) {
      flowLists.APPLY = flowTemplate.APPLY;
      that.setState({ applyFlag: true });
      that.renderSelectKeys('APPLY',flowTemplate.APPLY, true);
    } else {
      that.renderSelectKeys('APPLY',flowTemplate.APPLY, false);
      that.setState({ applyFlag: false });
    }
    if (!(Array.isArray(AUDIT) && AUDIT.length > 0)) {
      flowLists.AUDIT = flowTemplate.AUDIT;
      that.setState({ auditFlag: true });
      that.renderSelectKeys('AUDIT',flowTemplate.AUDIT, true);
    } else {
      that.renderSelectKeys('AUDIT',flowTemplate.AUDIT, false);
      that.setState({ auditFlag: false });
    }
    that.setState({ flowLists });
  }
  dealFlowData(res, type, callback) {
    const that = this;
    const { data } = res;
    const flowLists = {
      APPLY: [],
      AUDIT: [],
    };
    if (Array.isArray(data)) {
      data.forEach((flow) => {
        if (flow.type === 'APPLY') {
          flowLists.APPLY.push(flow);
        } else {
          flowLists.AUDIT.push(flow);
        }
      });
    }
    if (callback) {
      this.setState({ [type]: flowLists }, () => {
        callback(that);
      });
    }
    this.setState({ [type]: flowLists });
  }
  addItem(type) {
    const flowLists = deepClone(this.state.flowLists);
    flowLists[type].push({ editFlag: true });
    this.setState({ flowLists });
  }
  textChange(value, type, step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    flowLists[flowType][step][type] = value;
    this.setState({ flowLists });
  }
  /**
   * 保存
   * @param {*} type 
   */
  async saveItem(type) {
    const { loanId } = this.props;
    const flowLists = deepClone(this.state.flowLists);
    let flag = false;
    /*
    * 生成step
    */
    flowLists[type].forEach((data, index) => {
      if (!data.title) {
        flag = true;
      }
      data.step = index + 1;
    });
    if (flag) {
      message.error('请填写完信息在保存');
      return;
    }
    const data = {
      id: loanId,
      procedureDTOs: flowLists[type],
      type,
    };
    try {
      let res = await saveFlow(data);
      this.loadFlowData(this.loadFlowTemplate);
    } catch (error) {
      console.log(error);
    }
  }
  cancleAdd(step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    flowLists[flowType].splice(step, 1);
    this.selectIdTokeys(flowLists, flowType);
    this.setState({ flowLists });
  }
  selectIdTokeys(flowLists, type) {
    const { flowTemplate } = this.state;
    const selectKeys = deepClone(this.state.selectKeys);
    selectKeys[type] = [];
    flowTemplate[type].forEach((data, index) => {
      flowLists[type].forEach((flowList) => {
        if (flowList.icon === data.icon) {
          selectKeys[type].push(index);
        }
      });
    });
    this.setState({ selectKeys });
  }
  confirmAdd(step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    flowLists[flowType][step].editFlag = false;
    this.setState({ flowLists });
  }
  openEdit(step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    flowLists[flowType][step].editFlag = true;
    this.setState({ flowLists });
  }
  async beforeUpload(file, step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    const { loanId } = this.props;
    this.setState({ spinning: true });
    const data = { prefix: `flow/${flowType}/${loanId}`, filename: step, file };
    const formData = new FormData();
    formData.append('file', file);
    data.formData = formData;
    try {
      const res = await uploadimg(data);
      res.prefix = data.prefix;
      const iconurl = await loadflowurl(res);
      flowLists[flowType][step].icon = `${iconurl.data}?t=${Math.random()}`;
    } catch (error) {
      console.log(error);
    }
    this.setState({ spinning: false, flowLists });
  }
  /**
   * 排序
   */
  sortData(type, step, flowType) {
    const flowLists = deepClone(this.state.flowLists);
    const j = type === 'up' ? step - 1 : step + 1;
    const temp = flowLists[flowType][j];
    flowLists[flowType][j] = flowLists[flowType][step];
    flowLists[flowType][step] = temp;
    this.setState({ flowLists });
  }
  renderSelectKeys(type, data, allFlag) {
    const { selectKeys, flowLists } = this.state;
    let selectedRowKeys = [];
    if (allFlag) {
      selectedRowKeys = data.map((item, index) => {
        return index;
      });
    } else {
      data.forEach((item, index) => {
        flowLists[type].forEach((flowList) => {
          if (item.icon === flowList.icon) {
            selectedRowKeys.push(index);
          }
        });
      });
    }
    selectKeys[type] = selectedRowKeys;
    this.setState({ selectKeys });
  }
  render() {
    const { flowLists, spinning, flowTemplate, applyFlag, auditFlag, selectKeys } = this.state;
    const { AUDIT, APPLY } = flowLists;
    // 优先选择flow的数据
    return (
      <div className={styles.flowrap}>
        <Spin spinning={spinning}>
          <Row style={{ marginBottom: '20px', borderBottom: '1px solid #d9d9d9', paddingBottom: '15px', textAlign: 'center' }}>
            <h4>申请流程</h4>
            <Col span={10}>
              <FlowTemplate
                select={true}
                dataSource={flowTemplate.APPLY}
                type="APPLY"
                selectedRowKeys={deepClone(selectKeys['APPLY'])}
                onSelectChange={(selectedRowKeys, selectedRows, type) => { this.onSelectChange(selectedRowKeys, selectedRows, type); }}
              />
            </Col>
            <Col span={14}>
              {Array.isArray(APPLY) && APPLY.length > 0 ? APPLY.map((data, index) => {
            return (
              <LoanFlowItem
                data={data}
                step={index}
                total={APPLY.length}
                flowType="APPLY"
                textChange={(value, type, step) => { this.textChange(value, type, step, 'APPLY'); }}
                confirmAdd={(step) => { this.confirmAdd(step, 'APPLY'); }}
                cancleAdd={(step) => { this.cancleAdd(step, 'APPLY'); }}
                openEdit={(step) => { this.openEdit(step, 'APPLY'); }}
                beforeUpload={(file, step) => { this.beforeUpload(file, step, 'APPLY'); }}
                sortData={(type, step, flowType) => { this.sortData(type, step, flowType); }}
              />);
          }) : <Icon type="frown" />}
              <p className={styles.btnwrap}>
                {/* <Button type="primary" onClick={() => { this.addItem('APPLY'); }}>新增</Button> */}
                <Button type="primary" onClick={() => { this.saveItem('APPLY'); }}>保存</Button>
                {applyFlag ? (
                  <div>flow数据为模版数据，请点击保存</div>
                ) : null}
              </p>
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <h4>审核流程</h4>
            <Col span={10}>
              <FlowTemplate
                select={true}
                dataSource={flowTemplate.AUDIT}
                type="AUDIT"
                selectedRowKeys={deepClone(selectKeys['AUDIT'])}
                onSelectChange={(selectedRowKeys, selectedRows, type) => { this.onSelectChange(selectedRowKeys, selectedRows, type); }}
              />
            </Col>
            <Col span={14}>
              {Array.isArray(AUDIT) && AUDIT.length > 0 ? AUDIT.map((data, index) => {
            return (
              <LoanFlowItem
                data={data}
                step={index}
                total={AUDIT.length}
                flowType="AUDIT"
                textChange={(value, type, step) => { this.textChange(value, type, step, 'AUDIT'); }}
                confirmAdd={(step) => { this.confirmAdd(step, 'AUDIT'); }}
                cancleAdd={(step) => { this.cancleAdd(step, 'AUDIT'); }}
                openEdit={(step) => { this.openEdit(step, 'AUDIT'); }}
                beforeUpload={(file, step) => { this.beforeUpload(file, step, 'AUDIT'); }}
                sortData={(type, step, flowType) => { this.sortData(type, step, flowType); }}
              />);
          }) : <Icon type="frown" />}
              <p className={styles.btnwrap}>
                {/* <Button type="primary" onClick={() => { this.addItem('AUDIT'); }}>新增</Button> */}
                <Button type="primary" onClick={() => { this.saveItem('AUDIT'); }}>保存</Button>
                {auditFlag ? (
                  <div>flow数据为模版数据，请点击保存</div>
                ) : null}
              </p>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}
export default FlowForm;
