import { LightningElement } from 'lwc';

export default class HelloConditionalrendering extends LightningElement {
    isvisible=false
handleClick(){
   this.isvisible = true
}
name='rama'
ontypeHandler(event)
{
   this.name=event.target.value
}
get ontype()
{
    return this.name === 'hello'
}
}