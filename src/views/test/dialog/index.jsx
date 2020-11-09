import React,{useState} from 'react';
import {Button} from 'antd';
import ByDialog from '@/components/ByDialog'
import confirm from '@/components/ByDialog/confirm'
import DialogContent from './content'

const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [elementHolder,setElement] = useState(null)
    const confirmFun = ()=>{
        setElement(confirm({
            children:<DialogContent />
            // children:<div>111</div>
        }))
    }
    console.log(elementHolder,111)
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