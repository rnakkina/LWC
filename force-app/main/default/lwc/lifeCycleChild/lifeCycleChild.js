import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("child constructor called")
    }
    connectedCallback(){
        console.log("connected callback method called from child")
        throw new Error('loading of child component failed')
    }
    renderedCallback(){
        console.log("called from rendered call back method from child")
    }
    disconnectedCallback()
    {
        alert('child disconnected call back called !')
    }
}