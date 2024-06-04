import { LightningElement, track } from 'lwc';
export default class BmiCalculator extends LightningElement {
   cardtitle = 'Bmi Calculator';
   ChangebuttonHandler(){
        this.cardtitle = 'New Value of BMI';
       // console.log('New Value:'+this.cardtitle);
   }
   @track bmiData = {
      weight: 0,
      Height: 0,
      result: 0
   }
 
OnWeightChange(event){
      this.bmiData.weight = parseFloat(event.target.value);
   }
   OnHeightChange(event){
      this.bmiData.Height = parseFloat(event.target.value);
   }
   CalcualteBMI(){
      try{
           this.bmiData.result = this.bmiData.weight/(this.bmiData.Height*this.bmiData.Height);
         } catch(error){
         this.bmiData = undefined;
      }
    }

}