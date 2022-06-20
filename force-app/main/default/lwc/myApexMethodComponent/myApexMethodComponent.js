import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class MyApexMethodComponent extends LightningElement {
 
 accountList;
 error;
 loadAccounts()
 {
    getAccountList().then(result=>{
        this.accountList = result;
        this.error = undefined;
    }).catch(error=>{
        this.error = error;
        this.accountList = null;
    })
 }
}