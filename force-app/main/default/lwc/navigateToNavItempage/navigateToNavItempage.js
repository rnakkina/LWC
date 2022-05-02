import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToNavItempage extends NavigationMixin(LightningElement) {
    Navigatetab()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'DemoApp'
            }
        })
    }

}