import React,{useState} from 'react';
import {Button} from 'antd';
import ByDialog from '@/components/ByDialog'
import DialogContent from './content'

const dialogView = ({})=>{
    const [visible,setVisible] = useState(false)
    const confirm = ()=>{
        ByDialog.confirm({
            children:<DialogContent />
        })
    }
    return (
        <div>
           <Button type="primary" onClick={() =>setVisible(true)}>ByDialog</Button>
           <Button type="primary" onClick={() =>confirm()}>confirm</Button>
           <ByDialog
            open={visible}
            onOutsideClick={() =>setVisible(false)}
           >
               <DialogContent />
           </ByDialog>
        </div>
    )
}
export default dialogView;