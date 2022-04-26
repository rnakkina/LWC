import { LightningElement , wire} from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    recievedMessage
    submessage
    @wire(MessageContext)
    context
    connectedCallback()
    {
        this.subscribeMessage()
    }
    subscribeMessage(){
        this.submessage = subscribe(this.context, SAMPLEMC, (message)=>
            {this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }
    handleMessage(message)
    {
        this.recievedMessage =  message.lmsData.value? message.lmsData.value : 'no message published'
    }
    unsubHandler()
    {
        unsubscribe(this.submessage)
        this.submessage=null
    }
}