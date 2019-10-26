import React from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
const { Header, Sider, Content } = Layout;
import "./index.less";
import { Link, Route, Redirect } from "react-router-dom";
import routerConfig, { componentLink } from "@/common/nav";

const menuList = routerConfig.flatten(Infinity)

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      openKeys:[],
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
    const asset = "react";
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
  getOpenKeys(routerConfig,loop,openKeys) {
    const { location } = this.props;
    const { pathname } = location;
    const keys = pathname.split("/").filter(item=>item).slice(0,-1);
    const {url,children} =  routerConfig.filter(item=>item.url == keys[loop-1])[0]||{}
    if(url){
      openKeys.push(url); 
    }
    if (Array.isArray(children) && children.length > 0) {
      this.getOpenKeys(children,loop+1,openKeys)
    }
    return openKeys;
  }
  renderBread(routerConfig,parentPath){
    const {location:{pathname}} = this.props;
    const pathArr = pathname.split("/").filter(item=>item)
    if(Array.isArray(routerConfig) && routerConfig.length > 0){
      return pathArr.map((item,index)=>{
        const currentIndex = routerConfig.findIndex(({url})=>item==url)
        if(currentIndex>-1){
          const {url,resourceNameCn} = routerConfig[currentIndex]
          let itemPath = '#';
          for(let i=0;i<index+1;i++){
            itemPath+=`/${pathArr[i]}`
          }
          // itemPath = itemPath.slice(0,-1)
          return <Breadcrumb.Item href={itemPath}>{resourceNameCn}</Breadcrumb.Item>
        }
      })
    }
  }
  render() {
    const {openKeys,collapsed} = this.state;
    const { location } = this.props;
    const { pathname } = location;
    const title = this.getTitle();
    document.title = title;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={this.getSelectedKeys()}
            openKeys={collapsed?[]:openKeys}
            onOpenChange={(openKeys)=>this.setState({openKeys})}
          >
            {this.renderMenu(routerConfig, "")}
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
             <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item href='/'>首页</Breadcrumb.Item>
                {this.renderBread(menuList,'')}
              </Breadcrumb>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.renderComponents(routerConfig, "")}
            {pathname == "/" ? (
              <Redirect exact strict from="/" to="/appMananger" />
            ) : null}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainView;
