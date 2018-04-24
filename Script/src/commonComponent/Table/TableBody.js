import React from 'react';
import { Checkbox } from 'antd';

import { isObjectValueEqual, deepClone, clone } from '../../utils/utils';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   columns: [],
    //   dataSource: [],
    //   rowSelection: {},
    //   columnsLeft: [],
    // };
  }
  // componentWillReceiveProps(nextProps) {
  //   const { columns, dataSource } = nextProps;
  //   if (!isObjectValueEqual(columns, this.props.columns)) {
  //     this.setState({ columns });
  //   }
  //   if (Array.isArray(dataSource) && !isObjectValueEqual(dataSource, this.props.dataSource)) {
  //     this.setState({ dataSource }, () => {
  //     });
  //   }
  // }
  onBodyCheckChange(e, index) {
    if (this.props.onBodyCheckChange) {
      this.props.onBodyCheckChange(e, index);
    }
  }
  render() {
    const { columns, columnsLeft, dataSource, rowSelection } = this.props;
    return (
      <table>
        {Array.isArray(dataSource) && dataSource.length > 0 ? (
          <tbody>
            {dataSource.map((data, index) => {
              return (
                <tr key={data.key ? data.key : index}>{((rowSelection && columnsLeft.length === 0) ? [<td><Checkbox onChange={(e) => { this.onBodyCheckChange(e, index); }} checked={data.checked} /></td>] : []).concat(columns.map((column) => {
                  return <td key={column.key}>{ typeof (column.render) === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]}</td>;
                  }))}
                </tr>);
          })}
          </tbody>) : <tbody><tr style={{ textAlign: 'center' }}>暂无数据</tr></tbody>}
      </table>
    );
  }
}
export default TableBody;
