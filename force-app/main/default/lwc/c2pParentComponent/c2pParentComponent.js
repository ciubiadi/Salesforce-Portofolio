import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    message = ''

    toggleModal(event){
        this.message = event.detail.msg;
        this.showModal = !this.showModal;
    }
}