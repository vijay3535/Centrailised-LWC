import { LightningElement,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
// Select option1 by default
value = ['red'];

   get options (){
    return [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'Blue' },
        { label: 'Green Marker', value: 'Green' },
        { label: 'Yellow Marker', value: 'Yellow' },

    ];
   }
   
  @api selectcheckbox(checkboxValue){
     const selectedcheckboxvalue = this.options.find(checkbox=>{
        return checkboxValue ===checkbox.value;
      })

      if(selectcheckbox){
        this.value = selectedcheckboxvalue;
        return "Successfully checked";
      }
    return "No checkbox found";
  }
}


