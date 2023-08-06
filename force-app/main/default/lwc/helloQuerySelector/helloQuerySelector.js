import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    usersList = ['John', 'Adrian', 'Kevin']

    fetchDetailHandler() {
        // look into the template o this component
        const h1Elem = this.template.querySelector('h1');
        h1Elem.style.border="1px solid blue";
        console.log(h1Elem.innerText);
        console.log('*****************************');

        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);    
            item.setAttribute('title', item.innerText);
        });

        // lwc:manual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>This is the paragrah added in the child element!</p>';
    }
}