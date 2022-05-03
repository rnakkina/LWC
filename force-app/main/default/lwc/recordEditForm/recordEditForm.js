import { LightningElement } from 'lwc';
import OBJECT_CON from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import ACC_ID from '@salesforce/schema/Contact.AccountId'
export default class RecordEditForm extends LightningElement {
    objectName = OBJECT_CON
    fields={
        AccountId:ACC_ID,
        name:NAME_FIELD,
        phone:PHONE_FIELD,
        email:EMAIL_FIELD,
        title:TITLE_FIELD
    }
    handleReset()
    {
       const inputfields= this.template.querySelectorAll('lightning-input-field')
        if(inputfields)
        {
            Array.from(inputfields).forEach(field=>{
                field.reset()
            })
        }
    }
}