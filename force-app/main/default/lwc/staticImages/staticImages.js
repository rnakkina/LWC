import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_IMAGE2 from '@salesforce/resourceUrl/user_svg'
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE
    userImage2 = USER_IMAGE2
}