const displayBox = document.getElementById("display");

let button = document.querySelectorAll("button");
    button.forEach(element => {
        addEventListener('click', event => {
            let x = document.getElementById(button[2]);
            console.log(x);
        })
    });

    function updateDisplay(){
        let x = document.getElementById("5");
        document.getElementById("display").value = x;
        console.log(x);
    }