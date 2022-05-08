import { LightningElement, wire } from 'lwc';
import filterAccountList from '@salesforce/apex/AccountController.filterAccountList'
export default class WireApexWithParams extends LightningElement {
    selectedtype=''
    @wire(filterAccountList, {type:'$selectedtype'})
    filteredAcclist

}