import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class CreateAccountRecord extends LightningElement {

    accountName;
    accountPhone;
    accountwebsite;
    accountNameHandlerChange(event){
this.accountName = event.target.value;
    }
    accountPhoneHandlerChange(event){
        this.accountPhone = event.target.value; 
    }
    accountWebsiteHandlerChange(event){
        this.accountwebsite = event.target.value;
    }

    createAccount(){
        const fields = {'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountwebsite};
        const recordInput = { apiName:'Account', fields };

        createRecord(recordInput)
        .then(response=>{
            console.log('Account has been created :', response.id)
        }).catch(error=>{
            console.error ('Error creating account :', error.body.message);
        });

    }
}