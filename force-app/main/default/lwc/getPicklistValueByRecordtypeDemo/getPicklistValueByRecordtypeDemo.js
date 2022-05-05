import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACC_OBJ from '@salesforce/schema/Account'
export default class GetPicklistValueByRecordtypeDemo extends LightningElement {
    
    picklistoptions=[]
    ratingoptions
    industryoptions
    selectedIndus=''
    selectedRating=''
    @wire(getObjectInfo, {objectApiName: ACC_OBJ})
    objectInfo
    @wire(getPicklistValuesByRecordType, {objectApiName: ACC_OBJ, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    picklistInfo({data, error})
    {
        if(data)
        {
            console.log(data)
            this.ratingoptions = [...this.picklistgenerator(data.picklistFieldValues.Rating)]
            this.industryoptions = [...this.picklistgenerator(data.picklistFieldValues.Industry)]
        }
        if(error)
        {
            console.log(error)
        }
    }
    picklistgenerator(data){
        return data.values.map(item=>({label:item.label, value:item.value}))
    }
    handleChange(event)
    {
        console.log(event.target.name +'===>' +event.target.value)
        if(event.target.name === 'Industry')
        {
            this.selectedIndus = event.target.value
        }
        if(event.target.name === 'rating')
        {
            this.selectedRating = event.target.value
        }
    }

}