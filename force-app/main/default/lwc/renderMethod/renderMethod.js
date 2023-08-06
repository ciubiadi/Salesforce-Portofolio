import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    selectedBtn = '';
    
    render() {
        // return the reference of the template
        return this.selectedBtn === 'Sign Up' ? signupTemplate :
            this.selectedBtn === 'Sign In' ? signinTemplate : 
            renderTemplate;
    }

    handleClick(event){
        this.selectedBtn = event.target.label; 
    }

    submitHandler(e){
        console.log(`${e.target.label} Succesfully!`);
    }
}
