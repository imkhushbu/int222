/* Q. Create a JS to create a basic converter that converts m to cm and Fahrenheit to
Celsius. Create buttons for the conversions and take number from the user. Display the converted 
value in pop-up box. */

document.querySelector("#com_dis").addEventListener("click", ()=>{
    const unit = document.querySelector("#dis").value;
    const mag = Number(document.querySelector("#dis_num").value);
    let res;
    switch(unit){
        case "mtr":
            res = mag/100;
            break;
        case "cm":
            res = mag*100;
            break;
        default:
            res = 0;
    }
    document.querySelector("#res_dis").innerHTML = `Result : ${res + unit}`;
});

document.querySelector("#com_temp").addEventListener("click", ()=>{
    const unit = document.querySelector("#temp").value;
    const mag = Number(document.querySelector("#temp_num").value);
    let res;
    switch(unit){
        case "cel":
            res = (mag - 32) * (5/9);
            res += `°C`; 
            break;
        case "fah":
            res = (mag * (9/5)) + 32;
            res += `°F`; 
            break;
        default:
            res = 0;
    }
    document.querySelector("#res_temp").innerHTML = `Result : ${res}`;
});