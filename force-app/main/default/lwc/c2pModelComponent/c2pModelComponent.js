import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    onclickHandler()
    {
        const cusEvent = new CustomEvent('close',{
            detail: {
                        msg:"Modal closed successfully !!"
                    }
        })
        this.dispatchEvent(cusEvent)
    }
}