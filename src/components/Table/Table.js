import React from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Spin, Checkbox, Row, Col, Pagination } from 'antd';

import styles from './Table.less';
import { isObjectValueEqual, deepClone, clone } from '../../utils/utils';


class LenTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
      columnsLeft: [],
      columnsRight: [],
      dataSource: this.props.dataSource,
      rowSelection: this.props.rowSelection,
      selectedRowKeys: this.props.rowSelection && this.props.rowSelection.selectedRowKeys ? this.props.rowSelection.selectedRowKeys : [],
      indeterminate: Array.isArray(this.props.dataSource) && this.props.rowSelection && Array.isArray(this.props.rowSelection.selectedRowKeys) && this.props.dataSource.length !== this.props.rowSelection.selectedRowKeys.length && this.props.rowSelection.selectedRowKeys.length >  0 ? true : false,
      selectAll: Array.isArray(this.props.dataSource) && this.props.rowSelection && Array.isArray(this.props.rowSelection.selectedRowKeys) && this.props.dataSource.length === this.props.rowSelection.selectedRowKeys.length ? true : false,
      pagination: this.props.pagination,
    };
  }
  componentDidMount() {
    this.findFixedCol();
    // const columns = deepClone(this.state.columns);
  }
  componentWillReceiveProps(nextProps) {
    const { columns, dataSource, rowSelection, pagination } = nextProps;
    if (!isObjectValueEqual(columns, this.props.columns)) {
      this.setState({ columns });
    }
    if (rowSelection && Array.isArray(rowSelection.selectedRowKeys) && !isObjectValueEqual(rowSelection, this.props.rowSelection)) {
      this.setState({ selectedRowKeys: rowSelection.selectedRowKeys }, () => {
        this.checkSelected();
      });
    }
    if (Array.isArray(dataSource) && !isObjectValueEqual(dataSource, this.props.dataSource)) {
      this.setState({ dataSource }, () => {
        this.checkSelected();
      });
    }
    if (!isObjectValueEqual(pagination, this.props.pagination)) {
      this.setState({ pagination });
    }
  }
  onBodyCheckChange(e, index) {
    const { selectedRowKeys } = this.state;
    const { checked } = e.target;
    // 对应选中
    if (checked) {
      selectedRowKeys.push(index);
    } else {
      const currentIndex = selectedRowKeys.findIndex((selectedRowKey) => { return selectedRowKey === index; });
      selectedRowKeys.splice(currentIndex, 1);
    }
    this.setState({ selectedRowKeys }, () => {
      this.doRowSelectionFun();
      this.checkSelected();
    });
  }
  onHeaderCheckChange() {
    const { indeterminate, selectAll, dataSource } = this.state;
    let selectedRowKeys = [];
    // 这两种情况都要全选中
    if (indeterminate || !selectAll) {
      this.setState({ indeterminate: false, selectAll: true });
      if (Array.isArray(dataSource) && dataSource.length > 0) {
        selectedRowKeys = dataSource.map((data, index) => {
          return index;
        });
      }
      this.setState({ selectedRowKeys }, () => {
        this.doRowSelectionFun();
        this.checkSelected();
      });
    }
    // 全不选
    if (selectAll) {
      this.setState({ indeterminate: false, selectAll: false, selectedRowKeys }, () => {
        this.doRowSelectionFun();
        this.checkSelected();
      });
    }
  }
  findFixedCol() {
    const { columns } = this.state;
    const columnsLeft = [];
    const columnsRight = [];
    if (Array.isArray(columns) && columns.length > 0) {
      columns.forEach((column) => {
        if (column.fixed && column.fixed === 'left') {
          columnsLeft.push(column);
          this.reSetColumns(column, 'left');
        }
        if (column.fixed && column.fixed === 'right') {
          columnsRight.push(column);
          this.reSetColumns(column, 'right');
        }
      });
    }
    this.setState({ columnsRight, columnsLeft });
  }
  reSetColumns(column, dirction) {
    let { columns } = this.state;
    const currentIndex = columns.findIndex((col) => { return isObjectValueEqual(col, column); });
    if (currentIndex >= 0) {
      columns.splice(currentIndex, 1);
      if (dirction === 'left') {
        columns = [column, ...columns];
      } else {
        columns = [...columns, column];
      }
    }
    this.setState({ columns });
  }
  doRowSelectionFun() {
    const { rowSelection: { onChange }, selectedRowKeys, dataSource } = this.state;
    let selectedRows = [];
    if (typeof (onChange) === 'function') {
      selectedRows = (Array.isArray(dataSource) && dataSource.length > 0) && dataSource.map((data, index) => {
        let selectedRow = {};
        selectedRowKeys.forEach((selectedRowKey) => {
          if (selectedRowKey === index) {
            selectedRow = data;
          }
        });
        return selectedRow;
      });
    }
    onChange(selectedRowKeys, selectedRows);
  }
  checkSelected() {
    const { selectedRowKeys, dataSource } = this.state;
    if (Array.isArray(dataSource) && Array.isArray(selectedRowKeys)) {
      const addCheckedData = dataSource.map((data, index) => {
        const newData = { ...data };
        newData.checked = false;
        selectedRowKeys.forEach((selectedRowKey) => {
          if (selectedRowKey === index) {
            newData.checked = true;
          }
        });
        return newData;
      });
      this.setState({ dataSource: addCheckedData });
      this.setState({ selectAll: !!(dataSource.length === selectedRowKeys.length) });
      this.setState({ indeterminate: !!(selectedRowKeys.length && dataSource.length !== selectedRowKeys.length) });
    }
  }
  // 数据排序
  sortData(dataIndex, type, sorterFun) {
    const dataSource = deepClone(this.state.dataSource);
    const { length } = dataSource;
    for (let i = 0; i < length - 1; i += 1) {
      for (let j = i + 1; j < length; j += 1) {
        if (type === 'descend') {
          if (dataSource[i][dataIndex] < dataSource[j][dataIndex]) {
            const temp = dataSource[i];
            dataSource[i] = dataSource[j];
            dataSource[j] = temp;
          }
        } else if (dataSource[i][dataIndex] > dataSource[j][dataIndex]) {
          const temp = dataSource[i];
          dataSource[i] = dataSource[j];
          dataSource[j] = temp;
        }
      }
    }
    sorterFun(dataSource, type);
  }
  paginationChnage(page, pageSize) {
    const { pagination } = this.state;
    if (pagination && typeof (pagination.onChange) === 'function') {
      pagination.onChange(page, pageSize);
    }
  }
  render() {
    const { columns, columnsRight, columnsLeft, dataSource, rowSelection, indeterminate, selectedRowKeys, selectAll, pagination } = this.state;
    return (
      <div className={styles['len-table-wrap']}>
        <Spin spinning={false}>
          <div className={styles['table-body']}>
            <table>
              {/* <colgroup>
                <col style={{width: '150px', minWidth: '150px'}}></col>
                <col style={{width: '150px', minWidth: '150px'}}></col>
              </colgroup> */}
              <thead>
                <tr>
                  {((rowSelection && columnsLeft.length === 0) ? [<td><Checkbox indeterminate={indeterminate} onChange={() => { this.onHeaderCheckChange(); }} checked={selectAll} /></td>] : []).concat(columns.map((column) => {
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
              {Array.isArray(dataSource) && dataSource.length > 0 ? (
                <tbody>
                  {dataSource.map((data, index) => {
                    return (
                      <tr key={data.key ? data.key : index}>{((rowSelection && columnsLeft.length === 0) ? [<td><Checkbox onChange={(e) => { this.onBodyCheckChange(e, index); }} checked={data.checked} /></td>] : []).concat(columns.map((column) => {
                        return <td key={column.key}>{ typeof (column.render) === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]}</td>;
                        }))}
                      </tr>);
                  })}
                </tbody>) : <tbody><tr>暂无数据</tr></tbody>}
            </table>
          </div>
          {columnsLeft.length > 0 ? (
            <div className={[styles['table-body'], styles['fixed-left']].join(' ')}>
              <table>
                {/* <colgroup>
                  <col style={{width: '150px', minWidth: '150px'}}></col>
                  <col style={{width: '150px', minWidth: '150px'}}></col>
                </colgroup> */}
                <thead>
                  <tr>
                    {((rowSelection) ? [<td><Checkbox indeterminate={indeterminate} onChange={() => { this.onHeaderCheckChange(); }} checked={selectAll} /></td>] : []).concat(columnsLeft.map((column) => {
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
                {Array.isArray(dataSource) && dataSource.length > 0 ? (
                  <tbody>
                    {dataSource.map((data, index) => {
                      return (
                        <tr key={data.key ? data.key : index}>{(rowSelection ? [<td><Checkbox onChange={(e) => { this.onBodyCheckChange(e, index); }} checked={data.checked} /></td>] : []).concat(columnsLeft.map((column) => {
                          return <td key={column.key}>{ typeof (column.render) === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]}</td>;
                          }))}
                        </tr>);
                    })}
                  </tbody>) : null}
              </table>
            </div>) : null}
          
          {columnsRight.length > 0 ? (
            <div className={[styles['table-body'], styles['fixed-right']].join(' ')}>
              <table>
                {/* <colgroup>
                  <col style={{width: '150px', minWidth: '150px'}}></col>
                  <col style={{width: '150px', minWidth: '150px'}}></col>
                </colgroup> */}
                <thead>
                  <tr>
                    {(columnsRight.map((column) => {
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
                {Array.isArray(dataSource) && dataSource.length > 0 ? (
                  <tbody>
                    {dataSource.map((data, index) => {
                      return (
                        <tr key={data.key ? data.key : index}>{(columnsRight.map((column) => {
                          return <td key={column.key}>{ typeof (column.render) === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]}</td>;
                          }))}
                        </tr>);
                    })}
                  </tbody>) : null}
              </table>
            </div>) : null}
          <Row>
            <Pagination {...pagination} onChange={(page, pageSize) => { this.paginationChnage(page, pageSize); }} style={{ float: 'right' }} />
          </Row>
        </Spin>
      </div>
    );
  }
}
export default LenTable;
