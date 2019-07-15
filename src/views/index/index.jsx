import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
import "./index.less";
import {Link,Route,Redirect} from 'react-router-dom'
import routerConfig ,{componentLink} from '@/common/nav'

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  renderMenu(menusData, parentPath) {
    const { collapsed } = this.state;
    return menusData.map((item, index) => {
      const { icon = "user", url, name } = item;
      const itemPath = `${parentPath}/${url || ""}`.replace(/\/+/g, "/");
      if (Array.isArray(item.children) && item.children.length > 0) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={icon} />
                {name}
              </span>
            }
          >
            {this.renderMenu(item.children, itemPath)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={url || index}>
            <Icon type={icon} />
            {collapsed ? null : <Link to={`${itemPath}`}>{name}</Link>}
          </Menu.Item>
        );
      }
    });
  }
  renderComponents(menusData, parentPath) {
    const components = menusData.map((item, index) => {
      const { url } = item;
      const itemPath = `${parentPath}/${url || ""}`.replace(/\/+/g, "/");
      const component = componentLink[url];
      if (Array.isArray(item.children) && item.children.length > 0) {
        return <div>{this.renderComponents(item.children, itemPath)}</div>;
      } else {
        return component ? (
          <Route
            exact={item.exact}
            key={itemPath}
            path={itemPath}
            component={component}
          />
        ) : null;
      }
    });
    return components;
  }
  getSelectedKeys() {
    const {
      location: { pathname }
    } = this.props;
    const keys = pathname.split("/").slice(1);
    return keys;
  }
  getTitle() {
    const asset = "权限管理";
    let title = "";
    const { location } = this.props;
    const { pathname } = location;
    const keys = pathname.split("/").slice(1);
    if (!keys.length) {
      title = asset;
    }
    routerConfig.forEach(item => {
      if (item.url == keys[0]) {
        title = `${item.meta || item.name}-${asset}`;
      }
    });
    return title;
  }
  getOpenKeys(routerConfig, openKeys) {
    const { location } = this.props;
    const { pathname } = location;
    const keys = pathname.split("/").slice(1);
    for (let i = 0; i < routerConfig.length; i++) {}
  }
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const title = this.getTitle();
    document.title = title;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} selectedKeys={this.getSelectedKeys()}>
            {this.renderMenu(routerConfig,'')}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => {
                this.toggle();
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.renderComponents(routerConfig,'')}
            {pathname=='/'? <Redirect exact strict from="/" to="/appMananger"/>:null}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainView;
