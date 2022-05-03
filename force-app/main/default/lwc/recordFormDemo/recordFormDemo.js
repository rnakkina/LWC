import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJ from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ACC_NUM from '@salesforce/schema/Account.AccountNumber'
import ACC_TYP from '@salesforce/schema/Account.Type'
import ACC_SRC from '@salesforce/schema/Account.AccountSource'
export default class RecordFormDemo extends LightningElement {
    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJ
    fieldList = [NAME_FIELD, ACC_NUM, ACC_TYP, ACC_SRC]
    successHandler(event)
    {
       console.log(event.detail.id)
       const toastEvent= new ShowToastEvent({
            title:"Account Created",
            message:"Record Id:" +event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
}