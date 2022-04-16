import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correctAnswers = 0
    isSubmitted = false
    myQuestions=[
        {
            id:"question1",
            question:"which of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"question2",
            question:"which of the file is not exist in LWC?",
            answers:{
                a:".svg",
                b:".js",
                c:".apex"
            },
            correctAnswer:"c"
        },
        {
            id:"question3",
            question:"which of the following is not a directive?",
            answers:{
                a:"if:ture",
                b:"if:fales",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    changeHandler(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const {name, value }=event.target
        //const name = event.target.name
        this.selected = {...this.selected, [name]:value}
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer )
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswers" , this.correctAnswers)
    }
    resetHadler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
    get notAllSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredfull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success' : 'slds-text-color_error' }`
    }
}