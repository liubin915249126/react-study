import React from 'react';
import { Upload, Input, Row, Col, Icon, Popconfirm } from 'antd';
const { TextArea } = Input;

import styles from './flow.less';


class LoanFlowItem extends React.Component {
  textChange(e, type, step) {
    const { value } = e.target;
    if (this.props.textChange) {
      this.props.textChange(value, type, step);
    }
  }
  cancleAdd(step) {
    if (this.props.cancleAdd) {
      this.props.cancleAdd(step);
    }
  }
  confirmAdd(step) {
    if (this.props.confirmAdd) {
      this.props.confirmAdd(step);
    }
  }
  openEdit(step) {
    if (this.props.openEdit) {
      this.props.openEdit(step);
    }
  }
  beforeUpload(file, step) {
    if (this.props.beforeUpload) {
      this.props.beforeUpload(file, step);
    }
  }
  sortData(type, step, flowType) {
    if (this.props.sortData) {
      this.props.sortData(type, step, flowType);
    }
  }
  render() {
    const { data, step, flowType, total } = this.props;
    return (
      <div className={styles.flowitemWrap}>
        {data && data.editFlag ? (
          <Row className={styles.centerwrap}>
            <div className={styles.centerleft}>
              {/* <Upload
                name="file"
                // action={`${apiEndpoint}/icon/`}
                // data={{ prefix: `flow/${flowType}`, filename: step }}
                // listType="picture"
                beforeUpload={(file) => { this.beforeUpload(file, step); }}
              >
                <a>上传icon</a>
                {data.icon ? <div style={{ textAlign: 'center', paddingTop: '10px', background: '#fff', paddingBottom: '2px' }}><img src={data.icon} alt="icon" width="30" height="30" /></div> : null}
              </Upload> */}
              <img alt="icon" src={data.icon} width="30" height="30" />
            </div>
            <div>
              <div className={styles.textwrap}>
                {/* <Input placeholder="请输入标题" onChange={(e) => { this.textChange(e, 'title', step); }} value={data.title} /> */}
                {data.title}
              </div>
              <div className={styles.textwrap}>
                <TextArea placeholder="请输入内容" onChange={(e) => { this.textChange(e, 'description', step); }} value={data.description} />
              </div>
            </div>
            <a className={styles.centerright}>
              {(step !== total - 1) ? <Icon type="arrow-down" onClick={() => { this.sortData('down', step, flowType); }} /> : null}
              {step !== 0 ? <Icon type="arrow-up" onClick={() => { this.sortData('up', step, flowType); }} /> : null}
              <Popconfirm title="确认删除吗？" onConfirm={() => { this.cancleAdd(step); }}>
                <Icon type="close" />
              </Popconfirm>
              <Icon type="check" onClick={() => { this.confirmAdd(step); }} />
            </a>
          </Row>
          ) : (
            <Row className={styles.centerwrap}>
              <div className={styles.centerleft}>
                <img alt="icon" src={data.icon} width="30" height="30" />
              </div>
              <div>
                <Row className={styles.textwrap}>
                  {data.title}
                </Row>
                <Row className={styles.textwrap}>
                  {data.description}
                </Row>
              </div>
              <a className={styles.centerright}>
                <Icon type="edit" onClick={() => { this.openEdit(step); }} />
              </a>
            </Row>)}
      </div>
    );
  }
}
export default LoanFlowItem;
