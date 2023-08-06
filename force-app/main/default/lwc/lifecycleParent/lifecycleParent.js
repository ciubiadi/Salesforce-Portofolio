import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    name;
    isChildVisible = false;

    /***** METHODS *****/
    changeHandler(event){
        this.name = event.target.value;
    }

    toggleChildHandler(){
        this.isChildVisible = !this.isChildVisible;
    }

    /***** MOUNTING PHASE *****/
    constructor(){
        super();
        // this.template.querySelector('.abc'); => I can not select the element in constructor
        console.log('Parent Constructor called!');
    }

    connectedCallback(){
        console.log('Parent connectedCallback called!');
    }

    renderedCallback(){
        console.log('Parent renderedCallback called!');
    }

    /***** UNMOUNTING PHASE *****/
}