import { LightningElement } from 'lwc';

export default class PublicmethodParent extends LightningElement {
    value;

    checkboxselectHandler(){
        const childComponent = this.template.querySelector('c-public-method-parent')
        childComponent.selectcheckbox(this.value);
    }
}