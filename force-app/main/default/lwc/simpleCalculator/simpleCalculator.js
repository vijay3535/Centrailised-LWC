import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

     currentResult;
    @track previousResult=[];
    showpreviousResult = false;
    firstNumber;
    secondNumber;

    numberHandleChange(event){
        const inputBoxName =event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
    }else if (inputBoxName==='secondNumber')
        {
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult =`Result of ${firstN} + ${secondN} is  ${firstN + secondN}`;
        this.previousResult.push(this.currentResult);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult =`Result of ${firstN} - ${secondN} is  ${firstN - secondN}`;
        this.previousResult.push(this.currentResult);

    }

    MulHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult =`Result of ${firstN}*${secondN} is  ${firstN*secondN}`;
        this.previousResult.push(this.currentResult);

    } 

    DivHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult =`Result of ${firstN}/${secondN} is  ${firstN/secondN}`;
        this.previousResult.push(this.currentResult);

    } 

    showpreviousResultToggle(event){
        this.showpreviousResult = event.target.checked;

    }
}
