import React,{useState} from 'react';
import {Button,Modal} from 'antd';
import ByDialog from '@/components/ByDialog'
import DialogContent from './content'

const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [modal, contextHolder] = Modal.useModal();
    const confirm = ()=>{
        ByDialog.confirm({
            children:<DialogContent />
        })
    }
    const confirm1 = ()=>{
        modal.confirm({
            content:<DialogContent />
        })
    }
    return (
        <div>
           <Button type="primary" onClick={() =>setOpen(true)}>ByDialog</Button>
           <Button type="primary" onClick={() =>confirm()}>ByConfirm</Button>
           <Button type="primary" onClick={() =>setVisible(true)}>Modal</Button>
           <Button type="primary" onClick={() =>confirm1()}>ModalConfirm</Button>
           {contextHolder}
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