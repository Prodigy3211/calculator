// const displayBox = document.getElementById("display");

//Create array to hold display values

let displayArray = [];

function updateDisplay (varOne){
    //the display div should update with the key pressed
    console.log(varOne);
    if (typeof varOne == "number"){
    let display = document.getElementById('display');
    display.value = varOne;
    } else if (typeof varOne == "string") {
        placeOperator(varOne);
        function placeOperator(){ 
        //places the selected operator in the display
        let display = document.getElementById('display');
        display.value = varOne;
    
    }
}
}


    // displayNumber(5);
