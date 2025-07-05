let runAgain = true;
const checkage = (age)=>{
 return age>=18?true:false
}
while(runAgain){
let age = prompt("Enter the Age :")
age = Number.parseInt(age)

if(age>18){
    alert("You can drive!");
}
else{
    alert("You cannot drive!")
}
runAgain = confirm("Do you want to check again");
}