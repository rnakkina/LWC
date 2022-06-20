import { createElement } from 'lwc'
import MyNestedComponent from 'c/MyNestedComponent'
const EXPECTED = 'rama'
describe('my nested comp testing',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-nested-component', {
            is:MyNestedComponent
        })
        document.body.appendChild(element)
    })
    test('my nest comp test suit 1 how may times rendered', ()=>{
        const element = document.querySelector('c-my-nested-component')
        const childcomp = element.shadowRoot.querySelectorAll('c-my-child-component')
        expect(childcomp.length).toBe(1);
    })
    test('my nest comp test suit 2', ()=>{
        const element = document.querySelector('c-my-nested-component')
        const childcomp = element.shadowRoot.querySelector('c-my-child-component')
        expect(childcomp.userDetail.Name).toBe(EXPECTED)
    })
})