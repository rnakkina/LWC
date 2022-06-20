import { createElement } from 'lwc'
import MyChildComponent from 'c/MyChildComponent'
const USER_DATA = { Name: 'rama', Id:'1'}
describe('my child comp testing',()=>{
    test('test case 1', ()=>{
        const element = createElement('c-my-child-component', {
            is:MyChildComponent
        })
        element.userDetail = USER_DATA
        document.body.appendChild(element)
        const divelement = element.shadowRoot.querySelector('.username')
        expect(divelement.textContent).toBe(USER_DATA.Name)
    })
    test('test case 2', ()=>{
        const element = createElement('c-my-child-component', {
            is:MyChildComponent
        })
        document.body.appendChild(element)
        const divelement = element.shadowRoot.querySelector('p')
        expect(divelement.textContent).toBe('no user data available')
    })
})