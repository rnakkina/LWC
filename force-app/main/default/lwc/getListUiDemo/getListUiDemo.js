import { LightningElement, wire} from 'lwc';
import { getListUi } from 'lightning/uiListApi'
import CON_OBJ from '@salesforce/schema/Contact'
import TITLE_FLD from '@salesforce/schema/Contact.Title'
export default class GetListUiDemo extends LightningElement {
    contactList=[]
    pageToken=null
    nextPageToken = null
    previousPageToken = null
    @wire(getListUi, {objectApiName:CON_OBJ, listViewApiName:'AllContacts',
    pageSize:10, sortBy: TITLE_FLD , pageToken: '$pageToken'})
    getlistuiinfo({data, error})
    {
        if(data)
        {
            console.log(data)
            this.contactList = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
        }
        if(error)
        {
            console.log(error)
        }
    }
    onclickpreviousHandle()
    {
        this.pageToken = this.previousPageToken
    }
    onclicnextkHandle()
    {
        this.pageToken = this.nextPageToken
    }
}