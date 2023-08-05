import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Adrian Albert Ciubucciu'
    users = ["a", "b"]
    obj={
        name: 'obj name',
        age: 20
    }
    title="LWC Course"

    //call the method in the class trough the lifecycle hook

    //method
    // getName(){
    //     //perform my logic
    //     console.log('this.fullname');
    //     console.log(this.fullname);
    // }

    changeHandler(event){
        this.title = event.target.value;
    }
}