import { LightningElement, wire } from 'lwc';
import searchAccount from '@salesforce/apex/FsAccounts.searchAccount'
import { updateRecord  } from 'lightning/uiRecordApi';
const COLS=[
    {label:'Account Name', fieldName:'Name', editable:true},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Website', fieldName:'Website', editable:true},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', editable:true},
    {label:'Account Owner', fieldName:'OwnerName'}
]
export default class FinancialServicesAccountList extends LightningElement {
    searchkey=''
    accounts
    columns = COLS
    draftValues=[]
    onkeyupHandler(event)
    {
        this.searchkey = event.target.value
        searchAccount({searchkey:this.searchkey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }
    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs=event.detail.draftValues.map(draft=>{
            const fields = {...draft};
            return { fields:fields };
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('Account updated Successfully')
            this.draftValues=[]
        }).catch(error=>{
            console.error("Error updating the record", error)
        })
        
    }
}