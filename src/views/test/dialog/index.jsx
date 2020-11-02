import React,{useState} from 'react';
import {Button,Modal} from 'antd';
import ByDialog from '@/components/ByDialog'
import DialogContent from './content'

const dialogView = ({})=>{
    onst [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const confirm = ()=>{
        ByDialog.confirm({
            children:<DialogContent />
        })
    }
    const confirm1 = ()=>{
        Modal.confirm({
            content:<DialogContent />
        })
    }
    return (
        <div>
           <Button type="primary" onClick={() =>setOpen(true)}>ByDialog</Button>
           <Button type="primary" onClick={() =>confirm()}>ByConfirm</Button>
           <Button type="primary" onClick={() =>setVisible(true)}>Modal</Button>
           <Button type="primary" onClick={() =>confirm1()}>ModalConfirm</Button>
           <ByDialog
            open={open}
            onOutsideClick={() =>setOpen(false)}
           >
            <DialogContent />
           </ByDialog>
           <Modal
            visible={visible}
           >
            <DialogContent />
           </Modal>
        </div>
    )
}
export default dialogView;