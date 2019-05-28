import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import './index.less'; 
import {Link} from 'react-router-dom'
class MainView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props)
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <Link to="/main">组件</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <Link to="/main/about">Fetch测试</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <Link to="/main/timeline/:1">时间轴</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="upload" />
                            <Link to="/main/thanos">灭霸特效</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={()=>{this.toggle()}}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>


        );
    }

}

export default MainView 