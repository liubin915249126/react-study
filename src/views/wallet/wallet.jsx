import React from 'react'
import { connect } from 'dva'
import { Button, Row, Col } from 'antd'

@connect(({ wallet }) => ({
    wallet: wallet.wallet,
    position: wallet.position
}))
export default class WalletComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        const { wallet, position } = this.props;
        console.log(111, wallet)
        return <div>
            <div>
                {Object.keys(wallet).map(key => <Row key={key}>
                    <Col span={12}><Button type='primary'>{key}</Button></Col>
                    <Col span={12}><Button type='primary'>{wallet[key]}</Button></Col>
                </Row>)}
            </div>
            <div>
                {position.map((item, index) => <React.Fragment key={index}>
                    {Object.keys(item).map(key => <Row key={key}>
                        <Col span={12}><Button type='primary'>{key}</Button></Col>
                        <Col span={12}><Button type='primary'>{wallet[key]}</Button></Col>
                    </Row>)}
                </React.Fragment>)}
            </div>
        </div>
    }
}