import React from 'react';
import { Spin } from 'antd';
import { LenTable } from '../commonComponent/index';

class FlowTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      dataSource1: {
        APPLY: [],
        AUDIT: [],
      },
    };
  }
  componentDidMount() {
    const { select } = this.props;
    if (!select) {
      this.loadTemplate();
    }
  }
  onSelectChange(selectedRowKeys, selectedRows, type) {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(selectedRowKeys, selectedRows, type);
    }
  }
  dealFlowData(data) {
    const dataSource1 = {
      APPLY: [],
      AUDIT: [],
    };
    if (Array.isArray(data)) {
      data.forEach((flow) => {
        if (flow.type === 'APPLY') {
          dataSource1.APPLY.push(flow);
        } else {
          dataSource1.AUDIT.push(flow);
        }
      });
    }
    this.setState({ dataSource1 });
  }
  async loadTemplate() {
    this.setState({ spinning: true });
    try {
      const { data } = await getFlowTemplate();
      this.dealFlowData(data);
    } catch(error) {
      console.log(error);
    }
    this.setState({ spinning: false });
  }
  render() {
    const { select, dataSource, selectedRowKeys, type } = this.props;
    const { spinning, dataSource1 } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => { this.onSelectChange(selectedRowKeys, selectedRows, type); },
    };
    const columns = [
      {
        title: 'icon',
        dataIndex: 'icon',
        key: 'icon',
        render: (text, record, index) => {
          return <img src={text} alt="icon" width="30" height="30" />;
        },
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
      },
    ];
    if (select) {
      return (
        <div>
          <LenTable columns={columns} dataSource={dataSource} rowSelection={rowSelection} />
        </div>);
    } else {
      return (
        <PageHeaderLayout title="flow模板设置">
          <Spin spinning={spinning}>
            <h4>APPLY</h4>
            <LenTable columns={columns} dataSource={dataSource1.APPLY} />
            <h4>AUDIT</h4>
            <LenTable columns={columns} dataSource={dataSource1.AUDIT} />
          </Spin>
        </PageHeaderLayout>
      );
    }
  }
}
export default FlowTemplate;
