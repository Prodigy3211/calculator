// const displayBox = document.getElementById("display");

//Create array to hold display values

let firstNumberArray = [];
let operatorArray = [];
let secondNumberArray = [];
let clicks = 0


function updateDisplay (varOne){
    //the display div should update with the key pressed
    clicks++; 
    
    if (typeof varOne == "number"){
        let display = document.getElementById('display');
    //Need a way to it to check if the Operator has been added.
        
        if(clicks === 1 && operatorArray.length === 0) {
            display.value = varOne;
            firstNumberArray.push(varOne);
        } else if(clicks >= 2 && operatorArray.length === 0) {
            display.value = "" + firstNumberArray[0] + varOne;
            firstNumberArray = [];
            firstNumberArray.push(Number(display.value));
            clicks = 0;
            console.log(firstNumberArray);
        } else if (clicks === 3 && operatorArray.length >= 1){
            display.value = varOne;
            secondNumberArray = [];
            secondNumberArray.push(varOne);
            console.log(secondNumberArray);
        } else if (clicks > 3 && operatorArray.length >= 1){
            display.value = "" + secondNumberArray+ varOne;
            secondNumberArray = [];
            secondNumberArray.push(Number(display.value));
            console.log(secondNumberArray);
            console.log(clicks);
        }
        
    } else if (typeof varOne == "string") {
        placeOperator(varOne);
        function placeOperator(){ 
        //places the selected operator in the display
        let display = document.getElementById('display');
        display.value = varOne;
            if (operatorArray.length < 1){
                operatorArray.push(varOne);
            } else {
            operatorArray.shift();
            operatorArray.push(varOne);
            }
        }
    }
};

function calculate(){
 //Take the values from each array calculate the result and display it
    let x = firstNumberArray[0];
    let y = secondNumberArray[0];
    clicks = 0;
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
        firstNumberArray = [];
        // secondNumberArray =[];
        firstNumberArray.push(Number(display.value));
        console.log(operatorArray);
}

function clearDisplay(){
    //Will clear the display area of any results.
    display.value = 0;
    firstNumberArray =[];
    secondNumberArray= [];
    operatorArray = [];
    clicks = 0;
    console.log(display.value);
}

    // displayNumber(5);
