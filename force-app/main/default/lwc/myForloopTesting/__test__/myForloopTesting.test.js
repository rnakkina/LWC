import { createElement } from 'lwc'
import MyForloopTesting from 'c/MyForloopTesting'
const EXPECTED = [ 'rama' ,'krishna' , 'nakkina']
describe('my for and iterator loop testing',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-forloop-testing', {
            is:MyForloopTesting
        })
        document.body.appendChild(element)
    })
    test('test case suit 1', ()=>{
        const element = document.querySelector('c-my-forloop-testing')
        const ulelement = element.shadowRoot.querySelectorAll('.foreachList>li')
        expect(ulelement.length).toBe(3)
    })
    test('test case suit 2', ()=>{
        const element = document.querySelector('c-my-forloop-testing')
        const userdetails = Array.from(element.shadowRoot.querySelectorAll('.foreachList>li'))
        const userlst = userdetails.map(li=>li.textContent)
        expect(userlst.length).toBe(3)
        expect(userlst).toEqual(EXPECTED)

    })
    test('test case suit 3', ()=>{
        const element = document.querySelector('c-my-forloop-testing')
        const firstdiv = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')
        expect(firstdiv.textContent).toBe('start of list')
        const lastdiv = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')
        expect(lastdiv.textContent).toBe('end of list')
    })
})