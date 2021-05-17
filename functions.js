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

    return{
    btnGreetClicked,
    getGreetedNames
    }
}