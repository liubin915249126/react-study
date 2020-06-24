import React from 'react' 

import WalletComponent from './wallet.jsx'
export default class Wallet extends React.Component {
    constructor(){
      super()
    }
    render(){
        return <div>
            <WalletComponent />
        </div>
    }
}