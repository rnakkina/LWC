import { LightningElement, track } from 'lwc';

export default class MyEventTesting extends LightningElement {
    @track greeting='world';
    onchangehandler(event)
    {
        this.greeting = event.target.value;
    }
}