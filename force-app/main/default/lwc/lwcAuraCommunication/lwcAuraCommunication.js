import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title
    handleClick()
    {
       const event =  new CustomEvent('sendmsg', {
            detail:{
                "msg": "hello from LWC"
            }
        }
        )
        this.dispatchEvent(event)
    }
}