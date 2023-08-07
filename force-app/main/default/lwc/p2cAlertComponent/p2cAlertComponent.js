import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message = "This is a message from the parent component";
    @api cardHeading
    @api number
    @api isValid
}