import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent 
    clickHandler(event){
        this.percent = event.target.value
    }
    get getpercentage(){
        return `width:${this.percent}%`
    }
}