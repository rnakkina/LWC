import { LightningElement } from 'lwc';

export default class HelloConditionalrendering extends LightningElement {
    isvisible=false
handleClick(){
   this.isvisible = true
}
}