import { LightningElement } from 'lwc';

export default class AccountManagerLDS extends LightningElement {
    recordId;

    sucessHandler(event){
        this.recordId = event.detail.id;
console.log('Successful RecordId ', + this.recordId);
    }
}