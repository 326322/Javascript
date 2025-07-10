let num = 2.62145

console.log(`Round of ${Math.round(num)}`)
console.log(`Ceiling of ${Math.ceil(num)}`)
console.log(`Floor of ${Math.floor(num)}`)

let fix = num.toFixed(4)
console.log(`Fixed type : ${typeof(num)} fixed value : ${fix}`)


let num1= 1_00_0000
console.timeLog(`USA - ${num1.toLocaleString('en-US')}`)


let salary = 130000
let monthlysalary = salary/12
console.log(`Monthly salary is ${monthlysalary.toFixed(2)}`)

let formatted = new Intl.NumberFormat('en-US' ,
    {style :'currency', currency : 'USD'})
console.log(`US Dollar ${formatted.format(monthlysalary)}`)