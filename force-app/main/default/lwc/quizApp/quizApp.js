import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"question1",
            question:"which of the following is not a template loop",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"question2",
            question:"which of the file is not exist in LWC",
            answers:{
                a:".svg",
                b:".js",
                c:".apex"
            },
            correctAnswer:"c"
        },
        {
            id:"question3",
            question:"which of the following is not a directive",
            answers:{
                a:"if:ture",
                b:"if:fales",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
}