import { LightningElement, wire, track } from 'lwc';
import searchAccount from '@salesforce/apex/FsAccounts.searchAccount'
import allFsAccounts from '@salesforce/apex/FsAccounts.allFsAccounts'
import { updateRecord  } from 'lightning/uiRecordApi';
const COLS=[
    {label:'Account Name', fieldName:'Name', editable:true},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Website', fieldName:'Website', editable:true},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', editable:true},
    {label:'Account Owner', fieldName:'Owner.Name'}
]
export default class FinancialServicesAccountList extends LightningElement {
    searchkey=''
    @track accountsList = []
    filteredAccounts = []
    columns = COLS
    draftValues=[]
    @wire(allFsAccounts)
    fsAccountsData({data, error})
    {
        if(data)
        {
            console.log(data)
            this.accountsList = data
            this.filteredAccounts = data
        }
        if(error)
        {
            console.log(error)
        }
    }

    onkeyupHandler(event)
    {
        console.log(event.target.value)
        this.searchkey = event.target.value
        let src = event.target.value
        this.filteredAccounts = []
        let accf = this.accountsList.map(item=> {
        console.log(item.Name.includes(src))
        if(item.Name.includes(src)){
            this.filteredAccounts.push(item)
        }
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