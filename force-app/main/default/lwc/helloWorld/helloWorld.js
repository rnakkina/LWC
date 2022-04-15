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
  this.address = {...this.address, "city":event.target.value}
}
userLst = ["rama", "krishna", "nakkina"]
num1 = 10
num2 = 20
get getmyuserlst(){
    return this.userLst[0].toUpperCase()
}
get getmymultiplied()
{
    return this.num1*this.num2
}
}