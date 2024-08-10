// const displayBox = document.getElementById("display");

//Create array to hold display values

let numberArray = [];
let operatorArray = [];
let clicks = 0


function updateDisplay (varOne){
    //the display div should update with the key pressed
    clicks++; 
    
    if (typeof varOne == "number"){
        let display = document.getElementById('display');
        if(clicks === 1) {
            display.value = varOne;
            numberArray.push(varOne);
        } else if(clicks === 2) {
            display.value = " " + varOne + varOne;
            numberArray = [];
            numberArray.push(Number(display.value));
        }
        //push new value to numberArray
        //can we clear the number Array and then add new value with two numbers on second click?
        // numberArray.push(varOne);
        console.log(numberArray);
        
    } else if (typeof varOne == "string") {
        placeOperator(varOne);
        function placeOperator(){ 
        //places the selected operator in the display
        let display = document.getElementById('display');
        display.value = varOne;
            operatorArray.push(varOne);
        }
    }
};

function calculate(){
 //Take the values from each array calculate the result and display it
    let x = numberArray[0];
    let y = numberArray[1];
    let display = document.getElementById('display');   
        if (operatorArray.includes('+')){
               display.value = x += y;
        } else if(operatorArray.includes('-')){
                display.value = x-=y;
        } else if (operatorArray.includes('*')){
                display.value = x*=y;
        } else if (operatorArray.includes('/')){
                display.value = (x /= y);
        } else {
            display.value = "Error";
        }
        numberArray = [];
        numberArray.push(Number(display.value));
}

function clearDisplay(){
    //Will clear the display area of any results.
    display.value = 0;
    numberArray =[];
    operatorArray = [];
}

    // displayNumber(5);
