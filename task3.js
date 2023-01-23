let input = document.querySelector("input");
let list = document.querySelector("ul");
let p = document.querySelector("p");
let button = document.querySelector("button");

button.onclick = handleAjout;

input.onkeydown = handleChange;


function handleAjout() {
    if (isInputEmpty()) {
    alert("Input empty, please type something !");
    return;
    }
    let li = document.createElement("li") ;
    let span = document.createElement("span") ;
    let ligne = document.createElement("hr");
    span.innerHTML = input.value ;
    li.appendChild(span);
    li.appendChild(ligne);
    list.appendChild(li);
    input.value = "";
    p.innerHTML = "";
}
function handleChange(e){
    if ((e.key != "Backspace") && (e.key != "Enter"))
    {
        p.innerHTML += e.key;
        
    }
    if (e.key == "Backspace")
    {
        p.innerHTML = p.innerHTML.slice(0,-1);
        
    }
        

                
}
function isInputEmpty() {
if (input.value == "") {
    return true;
}
return false;
}

input.addEventListener("keypress", function (e) {
if (e.key == "Enter") {
    handleAjout();
}
})
