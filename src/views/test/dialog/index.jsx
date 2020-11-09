import React,{useState} from 'react';
import {Button} from 'antd';
import ByDialog from '@/components/ByDialog'
import useDialog from '@/components/ByDialog/confirm'
import DialogContent from './content'

const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [elementHolder,confirmDialog] = useDialog();
    const confirm = ()=>{
        confirmDialog({
            children:<DialogContent />
            // children:<div>111</div>
        })
    }
    return (
        <div>
           <Button type="primary" onClick={() =>setOpen(true)}>ByDialog</Button>
           <Button type="primary" onClick={() =>confirm()}>ByConfirm</Button>
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