import { LightningElement, wire} from 'lwc';
import { getListUi } from 'lightning/uiListApi'
import CON_OBJ from '@salesforce/schema/Contact'
export default class GetListUiDemo extends LightningElement {
    contactList=[]
    @wire(getListUi, {objectApiName:CON_OBJ, listViewApiName:'AllContacts' })
    getlistuiinfo({data, error})
    {
        if(data)
        {
            console.log(data)
            this.contactList = data.records.records
        }
        if(error)
        {
            console.log(error)
        }
    }
}