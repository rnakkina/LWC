import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {
    navigateToVF()
    {
        this[NavigationMixin.Navigate]({ 
            type:"standard__webPage",
            attributes:{ 
                url:"/apex/targetVFpage"
            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl, "_blank")
        })
    }

}