import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToObjectpage extends NavigationMixin(LightningElement) {
    Navigatefiles()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home',
            }
        })
    }

}