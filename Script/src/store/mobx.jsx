'use strict'
import { observable,action } from 'mobx'

class mobxStore {
    @observable times;
    @action click = (Increment)=>{
      this.times += Increment
    }
    constructor(){
      this.times = 0
    }
}
const clickTimes = new mobxStore()
  
export default clickTimes