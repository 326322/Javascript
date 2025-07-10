let employee = {
    firstname : "Sourabh", 
    lastname : "Upadhyay",
    numberofyear : 5
};
let badge;
if(employee.numberofyear>5){
    employee.badge = "yellow"
}
else{
    employee.badge = "blue"
}
console.log(`Badge is : ${employee.badge}`)