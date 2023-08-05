import { LightningElement } from 'lwc';

export default class ImporvedConditionalDirectives extends LightningElement {
    value = '';

    changeHandler(event){
        this.value = event.target.value;
    }

    get options() {
        return [
            { label: 'Sales Cloud', value: 'sales' },
            { label: 'Service Cloud', value: 'service' }
        ];
    }

    get choosedSales(){
        return this.value === 'sales';
    }

    get choosedService(){
        return this.value === 'service';
    }
}