/* ----------------------- Questions Solved Combined ----------------------------------

Q. Create a JS code to build a basic calculator that 
performs addition, subtraction, multiplication and division. 

                                OR

Q. Write a JS code to build a calculator which contains 2 text boxes to enter numbers 
and buttons which perform basic operations like addition, subtraction, multiplication
and division. 

*/

document.querySelector("#perform").addEventListener("click", ()=>{
    const operation = document.querySelector("#op").value;
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    let res;
    switch(operation){
        case "add":
            res = num1+num2;
            break;
        case "sub":
            res = num1-num2;
            break;
        case "mul":
            res = num1*num2;
            break;
        case "div":
            res = num1/num2;
            break;
        default:
            res = 0;
    }
    document.querySelector("#res").innerHTML = `Result : ${res}`;
});
