import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    isLoaded = false;
   
    // Gets called whenever component gets remdered cp,[;ete;y]]
    renderedCallback(){
        if(this.isLoaded) return
            // it generates <style></style>
            const style = document.createElement('style');
            style.innerText = `c-shadow-dom-styling .slds-button{
                color:white;
                background-color: green;
            }`;
            this.template.querySelector('lightning-button').appendChild(style);
        
        this.isLoaded = true;
    }
}