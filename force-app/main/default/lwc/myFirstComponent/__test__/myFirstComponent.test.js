import { createElement } from 'lwc'
import MyFirstComponent from 'c/MyFirstComponent'
describe('c-my-first-component test suite', ()=>{
 test('display first greeting', ()=>{
    const element = createElement('c-my-first-component', {
        is:MyFirstComponent
    })
    document.body.appendChild(element)
    const firstdiv = element.shadowRoot.querySelector('div.first')
    expect(firstdiv.textContent).toBe('Hello, World!')
 })
 test('display second greeting', ()=>{
    const element = createElement('c-my-first-component', {
        is:MyFirstComponent
    })
    document.body.appendChild(element)
    const seconddiv = element.shadowRoot.querySelector('div.second')
    expect(seconddiv.textContent).toBe('My, World!')
 })
})
