import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    clickHandler(){
        const customEvent = new CustomEvent('closemodal');
        this.dispatchEvent(customEvent);
    }
}