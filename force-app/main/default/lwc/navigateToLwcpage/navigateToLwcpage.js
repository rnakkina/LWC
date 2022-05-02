import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLwcpage extends NavigationMixin(LightningElement) {
    navlwcHandler()
    {
        var defination={
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:'12436578'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

}