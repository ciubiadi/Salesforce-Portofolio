import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    clickHandler(){
        // detail property is a standard property so I can't use another keyword
        const customEvent = new CustomEvent('closemodal', {
            bubbles: true,
            detail: {
                msg: 'Modal Closed Succesfully!'}
        });
        this.dispatchEvent(customEvent);
    }

    footerHandler(){
        console.log('footerHandler called');
    }
}