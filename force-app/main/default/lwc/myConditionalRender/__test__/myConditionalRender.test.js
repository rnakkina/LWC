import { createElement } from 'lwc'
import MyConditionalRender from 'c/MyConditionalRender'
describe('my conditional rendering testing',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-conditional-render', {
            is:MyConditionalRender
        })
        document.body.appendChild(element)
    })
    test('MyConditionalRender test case 1',()=>{
        const element = document.querySelector('c-my-conditional-render')
        const divelement = element.shadowRoot.querySelector('.userinfo')
        expect(divelement.textContent).toBe('my password is ******')
    })
    test('MyConditionalRender test case 2', ()=>{
        const element = document.querySelector('c-my-conditional-render')
        const checkelement= element.shadowRoot.querySelector('lightning-input')
        checkelement.checked=true;
        checkelement.dispatchEvent(new CustomEvent('change'))
        return Promise.resolve().then(()=>{
            const divelement = element.shadowRoot.querySelector('.userinfo')
            expect(divelement.textContent).toBe('my password is Ramakrishna')
            })
   })
})