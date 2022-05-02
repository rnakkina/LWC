import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLwcpage extends NavigationMixin(LightningElement) {
    navlwcHandler()
    {
        var defination={
            componentDefination:'c:navigateLwcTarget'
        }
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

}