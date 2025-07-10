const isTruthy = (name , exp)=>{
console.log(`${name} ${Boolean(exp)}`)
}

isTruthy("val1", 0)
isTruthy("val2" , -1)
isTruthy("val3", "hi")
isTruthy("val4" , undefined )