import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Adrian Albert Ciubucciu'
    obj={
        name: 'obj name',
        age: 20
    }
    title="LWC Course"

     address={
        city: 'Galati',
        postcode: 800800,
        country: 'Romania'
    }
    // @track userList=["a", "b", "c"]

    /**** Mutate data with @track | @track binding example****/ 
    // @track address={
    //     city: 'Galati',
    //     postcode: 800800,
    //     country: 'Romania'
    // }

    changeHandler(event){
        this.title = event.target.value;
    }

    trackHandler(e) {
        this.address = {...this.address, 'city': e.target.value};
    }

    /*** Getter example  ***/
    users = ['John', 'Smith', 'Nick'];
    num1 = 25;
    num2 = 3;

    get firstUser(){
        return this.users[0].toUpperCase();
    }
    
    get sumOfNums(){
        return this.num1 + this.num2;
    }
}