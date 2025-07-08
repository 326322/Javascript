let promise = new Promise((resolve, reject) => {
    //alert("Hello");
    resolve(56);
})
console.log("Hello");
setTimeout (function(){
    console.log("Its Me!")
}, 3000)
console.log("World")
console.log(promise);