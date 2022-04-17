import { LightningElement } from 'lwc';
export default class HelloQuerySelector extends LightningElement {
    lst = ['rama' , 'krishna' , 'nakkina', 'sneha']
    fetchHandler()
    {
        const elem=this.template.querySelector('h1')
        console.log(elem.innerText)
        elem.style.border = "1px solid red";

        const lstelem = this.template.querySelectorAll('.name')
        Array.from(lstelem).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })
        const childelem = this.template.querySelector('.child')
        childelem.innerHTML='<p> hey this is child </p>'
    }
}