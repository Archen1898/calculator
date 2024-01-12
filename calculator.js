let firstNum ="";
let secondNum = "";
let operator ="";

let opIsSelected = "false";
let equalIsSelected = "false";
let opPressed = "false";


let bottomDisplay = document.querySelector("#bottomContent");
let topDisplay = document.querySelector("#topContent");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let addKey = document.querySelector("#add");
let subtractKey = document.querySelector("#subtract");
let multiplyKey = document.querySelector("#multiply");
let divideKey = document.querySelector("#divide");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let equals = document.querySelector("#equals");
let decimal = document.querySelector("#decimal");

console.log(one.textContent);

let numArray = {one, two, three, four,five,six,seven,eight,nine,zero, decimal};
let operateArray = {addKey, subtractKey, multiplyKey, divideKey};
let funcArray = {clear, backspace, equals};


function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    
    switch(operator){
        case "+": 
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
    }
}

function mouseHover(){
    this.style.backgroundColor = "lightgrey";
    this.addEventListener("mouseout", mouseExit);

}
function mouseExit(){
    this.style.backgroundColor = "";
}

function getNum(){
    opPressed = "false";
    if(opIsSelected == "false"){
        firstNum = bottomContent.textContent+this.textContent;
        bottomContent.textContent = firstNum;
        console.log(firstNum);
    }else{
        secondNum = bottomContent.textContent + this.textContent;
        bottomContent.textContent = secondNum;
        console.log(secondNum);
    }
}

function getOperator(){

    if(equalIsSelected=="false" && opIsSelected=="true" && bottomContent.textContent!="" && topContent.textContent != ""){

        secondNum = bottomContent.textContent;
        firstNum = operate(Number(firstNum),Number(secondNum),operator);
        operator = this.textContent;
        topContent.textContent = firstNum + " " + operator;
        bottomContent.textContent = "";
        

    }else if(equalIsSelected == "true"){
        firstNum = bottomContent.textContent;
        secondNum = "";
        operator = this.textContent;
        topContent.textContent = bottomContent.textContent + " " + operator;
        bottomContent.textContent = "";
        opIsSelected = "true";
    
    }else if(opPressed=="true"){
        return;
    }else{
        operator = this.textContent;
        topContent.textContent = bottomContent.textContent + " " + operator;
        bottomContent.textContent = "";
    }
    opIsSelected = "true";
    opPressed = "true";
}

for(let num in numArray){
    numArray[num].addEventListener("mouseover", mouseHover);
    numArray[num].addEventListener("click", getNum);
}

for(let op in operateArray){
    operateArray[op].addEventListener("mouseover", mouseHover);
    operateArray[op].addEventListener("click", getOperator);
}

for(let func in funcArray){
    funcArray[func].addEventListener("mouseover", mouseHover);
}

clear.addEventListener("click", function(){
    topContent.textContent = "";
    bottomContent.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
    opIsSelected = "false";
    equalIsSelected = "false";
    opPressed = "false";
})
backspace.addEventListener("click", function(){
    bottomContent.textContent = "";
    if(opIsSelected=="true"){
        secondNum="";
    }else{
        firstNum="";
    }
})

equals.addEventListener("click", function(){
    topContent.textContent = topContent.textContent + " " +bottomContent.textContent;
    console.log(operator);
    bottomContent.textContent = operate(Number(firstNum),Number(secondNum),operator);
    console.log(bottomContent.textContent);
    console.log("First Num = "+firstNum);
    console.log("Second Num = "+secondNum);
    opIsSelected="false";
    equalIsSelected="true";
    opPressed = "false";
})