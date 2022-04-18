import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedbtn=''
    render()
    {
        return this.selectedbtn === 'signup' ? signupTemplate :
        this.selectedbtn === 'signin' ? signinTemplate :
        renderTemplate
    }
    handleClick(event)
    {
        this.selectedbtn = event.target.lable
    }
}