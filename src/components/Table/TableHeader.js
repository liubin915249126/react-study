import React from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

import styles from './Table.less';


class TableHeader extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  onHeaderCheckChange() {
    if (this.props.onHeaderCheckChange) {
      this.props.onHeaderCheckChange();
    }
  }
  sortData(dataIndex, type, sorter) {
    if (this.props.sortData) {
      this.props.sortData(dataIndex, type, sorter);
    }
  }
  render() {
    const { columns, columnsLeft, rowSelection, indeterminate, selectAll, dataSource } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {((rowSelection && columnsLeft.length === 0 && Array.isArray(dataSource) && dataSource.length > 0) ? [<td><Checkbox indeterminate={indeterminate} onChange={() => { this.onHeaderCheckChange(); }} checked={selectAll} /></td>] : []).concat(columns.map((column) => {
              return (
                <td key={column.key}>{typeof (column.sorter) === 'function' ? (
                  <div className={styles.sorterwrap}>
                    <span>{column.title}</span>
                    <div className={styles.sortercolwrap}>
                      <div className={styles.sortericonwrap}>
                        <CaretUpOutlined
                          onClick={() => { this.sortData(column.dataIndex, 'ascend', column.sorter); }} />
                      </div>
                      <div className={styles.sortericonwrap}>
                        <CaretDownOutlined
                          onClick={() => { this.sortData(column.dataIndex, 'descend', column.sorter); }} />
                      </div>
                    </div>
                  </div>) : column.title}
                </td>
              );
              }))}
          </tr>
        </thead>
      </table>
    );
  }
}
export default TableHeader;
