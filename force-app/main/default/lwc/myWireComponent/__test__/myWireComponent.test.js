import { createElement } from 'lwc'
import MyWireComponent from 'c/MyWireComponent'
import getContact from '@salesforce/apex/ContactController.getContact'
const mockconlist = require('./data/getContactList.json')
const mockconlistNoData = require('./data/getContactListNoData.json')
jest.mock(
    "@salesforce/apex/ContactController.getContact",
    () => {
        const { createApexTestWireAdapter } = require("@salesforce/sfdx-lwc-jest");
        return {
            default: createApexTestWireAdapter(jest.fn()),
        };
    },
    { virtual: true }
);

describe('my wire comp testing', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-wire-component', {
            is:MyWireComponent
        })
        document.body.appendChild(element)
    })
    afterEach(()=>{
        jest.clearAllMocks();
    })
    test('my test case 1',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContact.emit(mockconlist)
        return Promise.resolve().then(()=>{
            const pelement = element.shadowRoot.querySelectorAll('p')
            expect(pelement.length).toBe(mockconlist.length);
            expect(pelement[0].textContent).toBe(mockconlist[0].Name)
        })
    })
    test('my test case 2',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContact.emit(mockconlistNoData)
        return Promise.resolve().then(()=>{
            const pelement = element.shadowRoot.querySelectorAll('p')
            expect(pelement.length).toBe(mockconlistNoData.length);
        })
    })
    test('my test case 3',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContact.error()
        return Promise.resolve().then(()=>{
            const errorelement = element.shadowRoot.querySelector('.error')
            expect(errorelement.textContent).not.toBeNull();
        })
    })
})