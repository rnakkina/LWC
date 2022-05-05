import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues  } from 'lightning/uiObjectInfoApi'
import ACC_OBJ from '@salesforce/schema/Account'
import INDUS_FLD from '@salesforce/schema/Account.Industry'
export default class GetPicklistValueDemo extends LightningElement {
    @wire(getObjectInfo, {objectApiName:ACC_OBJ})
    objectinfo
    
    selectedIndus = '';
    industryOptions=[]
    @wire(getPicklistValues, {recordTypeId:'$objectinfo.data.defaultRecordTypeId', fieldApiName:INDUS_FLD})
    pickinfo({data})
    {
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
    }

    generatePicklist(data)
    {
        return data.values.map(item=>({label:item.label, value:item.value}))
    }
    handleChange(event) {
        this.selectedIndus = event.detail.value;
    }
}