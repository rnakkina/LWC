import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
fullname = "ramakrishna"
changeHandler(event)
{
   this.title = event.target.value
}
}