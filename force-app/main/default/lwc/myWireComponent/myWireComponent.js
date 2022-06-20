import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactController.getContact'
export default class MyWireComponent extends LightningElement {
  @wire(getContact)
  cons
}