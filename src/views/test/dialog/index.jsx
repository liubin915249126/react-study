import React,{useState} from 'react';
import {Button,Modal} from 'antd';
import ByDialog,{useModal} from '@/components/ByDialog'
// import confirm from '@/components/ByDialog/confirm'
import DialogContent from './content'
import confirm1 from './confirm'


const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [elementHolder,confirm2] = useModal()
    const [modal,elementHolder1] = Modal.useModal()
    // const confirmFun = ()=>{
    //     setElement(confirm({
    //         children:<DialogContent />
    //         // children:<div>111</div>
    //     }))
    // }


    const confirmFun = ()=>{
        confirm2({
            children:<DialogContent />,
            onOk:()=>{

            }
        })
    }
    const modalConfirmFun = ()=>{
        modal.confirm({
            content:<DialogContent />,
            onOk:()=>{
                ByDialog.destroyAll()
            }
        })
    }
    return (
        <div>
            <div>
               <Button type="primary" onClick={() =>setOpen(true)}>ByDialog</Button>
               <Button type="primary" onClick={() =>confirmFun()}>ByConfirm</Button>
            </div>
            <div>
               <Button type="primary" onClick={() =>setVisible(true)}>Modal</Button>
               <Button type="primary" onClick={() =>modalConfirmFun()}>modalConfirm</Button>
            </div>
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
           {elementHolder}
           {elementHolder1}
        </div>
    )
}
export default dialogView;