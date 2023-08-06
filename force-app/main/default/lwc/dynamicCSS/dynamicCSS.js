import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {
    percent = 10;

    keyupHandler(event){
        this.percent = event.target.value;
    }

    get percentage(){
        return `width: ${this.percent}%`;
    }
}