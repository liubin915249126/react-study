import React,{useState} from 'react';
import {Button,Modal} from 'antd';
import ByDialog,{useModal,destroyAll} from '@/components/ByDialog'
// import confirm from '@/components/ByDialog/confirm'
import DialogContent from './content'
import confirm1 from './confirm'


const dialogView = ({})=>{
    const [open,setOpen] = useState(false)
    const [visible,setVisible] = useState(false)
    const [elementsHolder,confirm2] = useModal()
    const [modal,elementHolder1] = Modal.useModal()

    console.log('elementsHolder',elementsHolder)

    // const confirmFun = ()=>{
    //     setElement(confirm({
    //         children:<DialogContent />
    //         // children:<div>111</div>
    //     }))
    // }

    const confirmFun1 = ()=>{
        confirm2({
            children: <div>
              <DialogContent />
              <Button type="primary" onClick={() =>destroyAll()}>ByConfirm</Button>
            </div>,
            onOk:()=>{

            }
        })
    }
    const confirmFun = ()=>{
        confirm2({
            children: <div>
              <DialogContent />
              <Button type="primary" onClick={() =>confirmFun1()}>ByConfirm1</Button>
            </div>,
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
           {elementsHolder}
           {elementHolder1}
        </div>
    )
}
export default dialogView;