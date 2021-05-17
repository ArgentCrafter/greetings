describe("Factory function tests:", function() {
    it("The displayString function should return 'Hello, Jaden!' when given input = jADeN and input2 = 'Hello, '", function () {
        let greet = greetFunctions();
        assert.equal(greet.displayString("jADeN", "Hello, "), "Hello, Jaden!");
    })
});