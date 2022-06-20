import { LightningElement, track } from 'lwc';

export default class MyForloopTesting extends LightningElement {
    @track userList= [
        {
            Id: '1',
            Name: 'rama'
        },
        {
           Id: '2',
           Name: 'krishna'
        },
        {
            Id:'3',
            Name:'nakkina'
        }
    ];
}