import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("parent constructor called")
    }
    connectedCallback(){
        console.log("connected callback method called")
    }
    renderedCallback(){
        console.log("called from rendered call back method from parent");
    }
    isChildvisible=false
    handleClick(event)
    {
        this.isChildvisible = !this.isChildvisible
    }
    errorCallback(error, stack)
    {
        console.log(error.message)
        console.log(stack)
    }

}