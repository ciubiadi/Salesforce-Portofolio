import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;

    toggleModal(){
        this.showModal = !this.showModal;
    }
}