import { LightningElement, track } from 'lwc';
export default class MyConditionalRender extends LightningElement {
 @track isVisible = false;
 changehandler(event)
 {
    this.isVisible = event.target.checked;
 }
}