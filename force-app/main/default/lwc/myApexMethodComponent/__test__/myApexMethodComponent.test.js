import { createElement } from 'lwc'
import MyApexMethodComponent from 'c/MyApexMethodComponent'
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
const ACC_ERROR = require('./data/accountErrors.json')
const ACC_LST = require('./data/getAccountList.json')
jest.mock(
    "@salesforce/apex/AccountController.getAccountList",
    () => ({default: jest.fn()}),
    { virtual: true }
);
describe('my Apex method testing', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-apex-method-component', {
            is:MyApexMethodComponent
        })
        document.body.appendChild(element)
    })
    afterEach(()=>{
        jest.clearAllMocks();
    })
    test('testfor case 1', ()=>{
        getAccountList.mockResolvedValue(ACC_LST)
        const element = document.querySelector('c-my-apex-method-component')
        const buttonelement = element.shadowRoot.querySelector('lightning-button')
        buttonelement.click()
        return new Promise(setImmediate).then(()=>{
            const pelements = element.shadowRoot.querySelectorAll('.accountName')
            expect(pelements.length).toBe(ACC_LST.length)
            expect(pelements[0].textContent).toBe(ACC_LST[0].Name)
        })
    })
    test('testfor case 2', ()=>{
        getAccountList.mockRejectedValue(ACC_ERROR)
        const element = document.querySelector('c-my-apex-method-component')
        const buttonelement = element.shadowRoot.querySelector('lightning-button')
        buttonelement.click()
        return new Promise(setImmediate).then(()=>{
            const errorelements = element.shadowRoot.querySelector('.error')
            expect(errorelements).not.toBeNull()
        })
    })
})