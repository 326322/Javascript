let details = {
    firstname : "Sourabh",
    lastname : "Upadhyay",
    age : 21,
    department : "Computer Science",
    salary : 4000,
    birthDate : new Date ("January 21 , 2004"),
    isActive : true

};
let jsonvalue = JSON.stringify(details,null ,2)
console.log(jsonvalue)


let jsonstring = `{
}`