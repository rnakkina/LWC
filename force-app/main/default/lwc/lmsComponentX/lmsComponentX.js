import { LightningElement , wire} from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {APPLICATION_SCOPE, MessageContext, subscribe} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    recievedMessage
    @wire(MessageContext)
    context
    connectedCallback()
    {
        this.subscribeMessage()
    }
    subscribeMessage(){
        subscribe(this.Context, SAMPLEMC, (message)=>{
            this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }
    handleMessage(message)
    {
        this.recievedMessage =  message.lmsData.value ? message.lmsData.value : "no message published"
    }

}