import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    loadModal=false
    message
    handleClick(event)
    {
        this.loadModal = true
    }
    closeHandler(event)
    {
        this.message = event.detail.msg
        this.loadModal = false
    }
}