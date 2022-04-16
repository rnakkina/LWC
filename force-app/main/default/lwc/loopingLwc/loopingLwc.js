import { LightningElement } from 'lwc';

export default class LoopingLwc extends LightningElement {

    CarLst = ["nissan", "ford", "kia", "audi"]
    ceoLst = [
        {
            id:1,
            company:"Google",
            name:"rama"
        },
        {
            id:2,
            company:"Apple",
            name:"krishna"
        },
        {
            id:3,
            company:"amezon",
            name:"nakkina"
        },
        {
            id:4,
            company:"facebook",
            name:"raja"
        }
    ]
}