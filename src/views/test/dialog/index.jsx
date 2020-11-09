import React,{useState} from 'react';
import {Button} from 'antd';
import ByDialog from '@/components/ByDialog'
import DialogContent from './content'

const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const confirm = ()=>{
        ByDialog.confirm({
            children:<DialogContent />
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
        </div>
    )
}
export default dialogView;