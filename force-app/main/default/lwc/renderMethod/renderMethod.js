import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedBtn=''
    render()
    {
        return this.selectedBtn === 'signup' ? signupTemplate :
        this.selectedBtn === 'signin' ? signinTemplate :
        renderTemplate
    }
    handleClick(event)
    {
        this.selectedBtn = event.target.label
    }
    submitHandler(event)
    {
        console.log("successfully signup to the site")
    }
    signinHandler(event)
    {
        console.log("successfully signin to the site")
    }
}