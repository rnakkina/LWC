import { LightningElement, wire } from 'lwc';
import filterAccountList from '@salesforce/apex/AccountController.filterAccountList'
export default class WireApexWithParams extends LightningElement {
    selectedtype=''
    @wire(filterAccountList, {type:'$selectedtype'})
    filteredAcclist

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }
    typeHandler(event){
        this.selectedtype = event.target.value
    }
}