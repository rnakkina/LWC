import { LightningElement, api } from 'lwc';

export default class LwcLightningDemo extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api level
}