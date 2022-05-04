import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
import USER_NAME from '@salesforce/schema/User.Name'
import USER_EMAIL from '@salesforce/schema/User.Email'
const fields = [USER_NAME,USER_EMAIL]
export default class WireDemoUserDetails extends LightningElement {
    UserId = Id

    userDetail
    @wire(getRecord, {recordId:'$UserId', fields})
    userDetailHandler({data, error})
    {
        if(data)
        {
            this.userDetail = data.fields
        }
        if(error)
        {
            console.error(error)
        }
    
    }
    @wire(getRecord, {recordId:'$UserId', fields})   
    userDetailProperty 

}