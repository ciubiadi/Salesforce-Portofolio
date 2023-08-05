import { LightningElement } from 'lwc';

export default class HelloLooping extends LightningElement {
    productsList = ["Burger", "Pizza", "Sushi", "Noodles"];

    userList = [
        {
            id: 1,
            name: 'Adrian C',
            email: 'adrian@ciub.com'
        },
        {
            id: 2,
            name: 'Cristian B',
            email: 'cristian@gmail.com'
        },
        {
            id: 3,
            name: 'Robert D',
            email: 'robert@gmail.com'
        }
    ]    
}