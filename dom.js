function say(){
    const name = document.getElementById("name").value;
    const output = document.getElementById("welcome");
    output.innerText = "Welcome to my Website ," + name;
}