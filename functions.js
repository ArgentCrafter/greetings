function greetFunctions() {
    var greetedNames = {};

    function btnGreetClicked(input) {
        if (greetedNames[input.toLowerCase()] === undefined) {
            greetedNames[input.toLowerCase()] = 1 ;
        }else{
            greetedNames[input.toLowerCase()]++;
        }
    }

    function getGreetedNames(){
        return greetedNames;
    }

    function displayString(input){
        return checkedBtn.value + (input[0].toUpperCase() + input.slice(1).toLowerCase() + "!");
    }

    return{
    btnGreetClicked,
    getGreetedNames,
    displayString
    }
}