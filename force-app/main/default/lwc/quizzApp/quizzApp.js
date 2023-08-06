import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
    questionsList=[
        {
            id: '1',
            question: 'Which one of the following is not a template loop?',
            answers: {
                a: 'for:each',
                b: 'iterator',
                c: 'map loop'
            },
            correctAnswer: 'c'
        },
        {
            id: '2',
            question: 'Which of the file is invalid in LWC component folder?',
            answers: {
                a: '.svg',
                b: '.apex',
                c: '.js'
            },
            correctAnswer: 'b'
        },
        {
            id: '3',
            question: 'Which one of the following is not a directive?',
            answers: {
                a: 'for:eachh',
                b: 'if:true',
                c: '@track'
            },
            correctAnswer: 'c'
        },

    ];

    selected = {}; // for storing answers
    numberOfCorrectAnswers = 0; // to show the number of correct ansewrs
    isSubmitted = false // use to show the result

    // used for disabling the submit button
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.questionsList.length);
    }

    // for applying dynamic styling to the result message
    get scoredMessageStyle(){
        return `slds-var-m-around_medium slds-text-heading_large ${this.questionsList.length === this.numberOfCorrectAnswers ? 
            'slds-text-color_success' : 'slds-text-color_error'}`
    }

    // get's called on every click on the options
    changeHandler(e){
        const {name, value } = e.target; 
        this.selected = {...this.selected, [name]:value};
    }
    
    // Form Submit Handler
    submitHandler(e) {
        e.preventDefault();
        let correctAnswers = this.questionsList.filter(item => this.selected[item.id] === item.correctAnswer);
        this.numberOfCorrectAnswers = correctAnswers.length;
        this.isSubmitted = true
        console.log(this.numberOfCorrectAnswers);
    }

    // Form Reset Handler
    resetHandler(e) {
        this.selected={};
        this.numberOfCorrectAnswers = 0;
        this.isSubmitted = false;
    }
}