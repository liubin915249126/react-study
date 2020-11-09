import React,{useState} from 'react';
import {Button} from 'antd';
import ByDialog from '@/components/ByDialog'
import confirm from '@/components/ByDialog/confirm'
import DialogContent from './content'
import confirm1 from './confirm'

const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [elementHolder,confirm2] = confirm()
    // const confirmFun = ()=>{
    //     setElement(confirm({
    //         children:<DialogContent />
    //         // children:<div>111</div>
    //     }))
    // }


    const confirmFun = ()=>{
        confirm2({
            children:<DialogContent />
        })
    }

    return (
        <div>
           <Button type="primary" onClick={() =>setOpen(true)}>ByDialog</Button>
           <Button type="primary" onClick={() =>confirmFun()}>ByConfirm</Button>
           <ByDialog
            open={open}
            onOutsideClick={() =>setOpen(false)}
           >
            <DialogContent />
           </ByDialog>
           {elementHolder}
        </div>
    )
}
export default dialogView;