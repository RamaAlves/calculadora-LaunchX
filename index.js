const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const btnEqual = document.getElementById("equal")
const display = document.getElementById("display")
const btnClear = document.getElementById("clear")

const result = function(expression){
    let res = eval(expression)
    return res
}

const clearDisplay = function(){
    display.value = "";
}


btnEqual.addEventListener("click", ()=>{
    if (display.value == "") return;
    try {
        let res = result(display.value);
        display.value = res;
    } catch (err) {
        display.value = "ERROR!"
        console.log(err)
    }
})

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        display.value += number.innerText;
    });
});

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        display.value += operator.innerText;
    });
});

btnClear.addEventListener("click",clearDisplay)