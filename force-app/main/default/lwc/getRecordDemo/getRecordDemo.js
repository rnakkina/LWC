import { LightningElement, wire, api } from 'lwc'
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi'
import NAME_FLD from '@salesforce/schema/Account.Name'
import TYPE from '@salesforce/schema/Account.Type'
import ANU_REV from '@salesforce/schema/Account.AnnualRevenue'
export default class GetRecordDemo extends LightningElement {
    name 
    type 
    annualRev
    @api recordId

   // @wire(getRecord , {recordId : '$recordId', layoutTypes:['Full'], modes:['View']})
   @wire(getRecord , {recordId : '$recordId' , fields:[NAME_FLD, TYPE, ANU_REV]})
    wirehandler({data, error})
    {
        if(data)
        {
            console.log(data)
            this.name = getFieldValue(data, NAME_FLD)
            this.type = getFieldValue(data, TYPE)
            this.annualRev = getFieldDisplayValue(data, ANU_REV)
            
        }
        if(error)
        {
            console.log(error)
        }
    }
}