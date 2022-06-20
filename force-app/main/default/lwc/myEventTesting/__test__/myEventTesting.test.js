import { createElement } from 'lwc'
import MyEventTesting from 'c/MyEventTesting'
describe('unit testing for MyEventTesting',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-event-testing', {
            is:MyEventTesting
        })
        document.body.appendChild(element)
    })
    test('c-my-event-testing test suit', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).toBe('Hello world')
    })
    test('c-my-event-testing test suit2', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).not.toBe('Hello Rama')
    })
    test('c-my-event-testing test suit3', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const inputelement = element.shadowRoot.querySelector('lightning-input')
        inputelement.value = 'salesforce'
        inputelement.dispatchEvent(new CustomEvent('change'))
        const text = element.shadowRoot.querySelector('p')
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello salesforce')
        })
        
    })
})

