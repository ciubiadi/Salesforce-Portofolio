import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Adrian Albert Ciubucciu'
    users = ["a", "b"]
    obj={
        name: 'obj name',
        age: 20
    }
    title="LWC Course"
    // @track address={
    //     city: 'Galati',
    //     postcode: 800800,
    //     country: 'Romania'
    // }
     address={
        city: 'Galati',
        postcode: 800800,
        country: 'Romania'
    }
    // @track userList=["a", "b", "c"]

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

    trackHandler(e) {
        // this.address = e.target.value;
        this.address = {...this.address, 'city': e.target.value};
        // this.userList[0] = '';
    }
}