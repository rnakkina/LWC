import { LightningElement } from 'lwc';
import searchAccount from '@salesforce/apex/AccountController.searchAccount'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchkey=''
    accounts
    onkeyupHandler(event)
    {
        this.searchkey = event.target.value
        searchAccount({searchkey:this.searchkey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }
}