import { LightningElement } from 'lwc';
import searchAccount from '@salesforce/schema/AccountController.searchAccount'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchkey=''
    accounts
    onkeyupHandler(event)
    {
        this.searchkey = event.target.value
        searchAccount({searchKey:this.searchkey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }
}