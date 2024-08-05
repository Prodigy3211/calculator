// const displayBox = document.getElementById("display");

//Create array to hold display values

let numberArray = [];
let operatorArray = [];

function updateDisplay (varOne){
    //the display div should update with the key pressed
    console.log(varOne);
    if (typeof varOne == "number"){
    let display = document.getElementById('display');
    display.value = varOne;
        numberArray.push(varOne);
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

function calculate(x,y){
 //Take the values from each array calculate the result and display it
    if (operatorArray.includes('+')){
        let x = numberArray[0];
        let y = numberArray[1];
        let display = document.getElementById('display');

        display.value = x += y;
    }
}


    // displayNumber(5);
