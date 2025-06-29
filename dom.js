function say(){
    const name = document.getElementById("name").value;
    const output = document.getElementById("welcome");
    output.innerText = "Welcome to my Website ," + name;
}
function Colour(){
    const colr = document.getElementById("colour").value;
    document.body.style.background = colr;
}