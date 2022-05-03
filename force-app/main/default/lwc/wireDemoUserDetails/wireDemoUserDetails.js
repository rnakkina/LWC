import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
export default class WireDemoUserDetails extends LightningElement {
    UserId = Id
    //0051D00000B0NkOQAV
    @wire(getRecord, {recordId:'0051D00000B0NkOQAV', fields:['User.Name','User.Email']})
    userDetailHandler(response)
    {
        console.log(response)
    }

}