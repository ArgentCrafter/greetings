describe("Factory function tests:", function() {
    it("The displayString function should return 'Hello, Jaden!' when given input = jADeN and input2 = 'Hello, '", function () {
        let greet = greetFunctions();
        assert.equal(greet.displayString("jADeN", "Hello, "), "Hello, Jaden!");
    })
    it("The displayString function should return 'Molo, Steven!' when given input = STEVEN and input2 = 'Molo, '", function () {
        let greet = greetFunctions();
        assert.equal(greet.displayString("STEVEN", "Molo, "), "Molo, Steven!");
    })
    it("the btnGreet function should return an object with the 'jaden' key holding a value of 0 when given input='jAdEN'", function() {
        let greet = greetFunctions();
        greet.btnGreetClicked("jAdEN");
        assert.equal(JSON.stringify(greet.getGreetedNames()), '{"jaden":1}')
    })
    it("the btnGreet function should return an object with the 'jaden' key and the 'steven' key holding the values of 1 when given input='jAdEN' the first time it's ran and input='steven' the second", function() {
        let greet = greetFunctions();
        greet.btnGreetClicked("jAdEN");
        greet.btnGreetClicked("steven");
        assert.equal(JSON.stringify(greet.getGreetedNames()), '{"jaden":1,"steven":1}')
    })
});