import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordpage extends NavigationMixin(LightningElement) {
    Navigatereceditmode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0031D00000iXLY1QAO',
                objectApiName: 'Contact',
                actionName:'edit'
            }
        })
    }
}