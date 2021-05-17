const nameInputElement = document.getElementById("nameInput");
const btnGreet = document.getElementById("greetMe");
const btnReset = document.getElementById("reset");
const display = document.getElementById("displayMessage");
const counter = document.getElementById("counter");

let greet = greetFunctions();
let regEx = /[a-z]/i;

function counterLoad() {
counter.innerHTML = Object.keys(JSON.parse(localStorage.getItem("names"))).length;
};

btnGreet.addEventListener("click", function() {
    var checkedBtn = document.querySelector("input[name='langInput']:checked");

    if (!regEx.test(nameInputElement.value)){
        display.innerHTML = "Please enter a valid name.";
        setTimeout(function(){ display.innerHTML = "" }, 5000);
    } else if (!checkedBtn) {
        display.innerHTML = "Please select a language.";
        setTimeout(function(){ display.innerHTML = ""}, 5000)
    } else{
        greet.btnGreetClicked(nameInputElement.value);
        localStorage.setItem("names", JSON.stringify(greet.getGreetedNames()));

        display.innerHTML = greet.displayString(nameInputElement.value);
        nameInputElement.value = "";
    }
    counter.innerHTML = Object.keys(JSON.parse(localStorage.getItem("names"))).length;
});

btnReset.addEventListener("click", function(){
    localStorage.clear();
    location.reload()
})