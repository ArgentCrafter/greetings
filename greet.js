const nameInputElement = document.getElementById("nameInput");
const btnGreet = document.getElementById("greetMe");
const btnReset = document.getElementById("reset");
const display = document.getElementById("displayMessage");
const counter = document.getElementById("counter");

let greet = greetFunctions();

var nameObj = greet.getGreetedNames;
var nameObjKeys = Object.keys(nameObj);

btnGreet.addEventListener("click", function() {
    var checkedBtn = document.querySelector("input[name='langInput']:checked");
    let regEx = /[a-z]/i;

    if (!regEx.test(nameInputElement.value)){
        display.innerHTML = "Please enter a valid name.";
        setTimeout(function(){ display.innerHTML = "" }, 5000);
    } else if (!checkedBtn) {
        display.innerHTML = "Please select a language.";
        setTimeout(function(){ display.innerHTML = ""}, 5000)
    } else{
        greet.btnGreetClicked(nameInputElement.value);
        nameObj = greet.getGreetedNames();
        nameObjKeys = Object.keys(nameObj);
        localStorage.setItem("names", nameObjKeys);

        var displayName = nameInputElement.value[0].toUpperCase() + nameInputElement.value.slice(1).toLowerCase() + "!";
        display.innerHTML = checkedBtn.value + displayName;
        nameInputElement.value = "";

        counter.innerHTML = nameObjKeys.length;
    }

});

btnReset.addEventListener("click", function(){
    localStorage.clear();
    location.reload()
})