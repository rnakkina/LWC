import { LightningElement , track} from 'lwc';

export default class HelloWorld extends LightningElement {
fullname = "ramakrishna"
changeHandler(event)
{
   this.title = event.target.value
}
address = {
    city : 'mississauga',
    state : 'ON'
}
trackHandler(event){
  this.address.city = {...this.address, "city":event.target.value}
}
}