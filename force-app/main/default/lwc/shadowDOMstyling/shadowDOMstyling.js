import { LightningElement } from 'lwc';

export default class ShadowDOMstyling extends LightningElement {
renderedCallback(){
    const style = document.createElement('style')
    style.innerText = `c-shadow-domstyling .slds-button{
        background: red;
        color: white;
    }`
    this.template.querySelector('lightning-button').appendChild(style)
}

}