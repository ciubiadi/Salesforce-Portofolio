import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    interval

    /***** MOUNTING PHASE *****/
    constructor(){
        super();
        console.log('Child Constructor called!');
    }

    connectedCallback(){
        console.log('Child connectedCallback called!');
        window.addEventListener('click', this.handleClick);
        thos.interval = window.setInterval();
    }

    renderedCallback(){
        console.log('Child renderedCallback called!');
    }

    /***** UNMOUNTING PHASE *****/
    // setTune abd setInterval can be cleared in this method of Unounting Phase
    disconnectedCallback(){
        console.log('Child disconnected')
        alert('Child disconnectedCallback called!!!');
        window.removeEventListener('click', this.handleClick);
        window.clearInterval(this.interval);
    }
}