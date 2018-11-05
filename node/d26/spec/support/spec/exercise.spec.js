describe("Testing the Jasmine suite", function () {

    it("I am block one", function () {
        console.log('Block one reporting in.');
    });
    it("I am block two", function () {
        console.log('Block two reporting in.');
    });
    it("I am block three", function () {
        console.log('Block three reporting in.');
    });
    it("I am block four", function () {
        console.log('Block four reporting in.');
    });
    it("I am block five, but I will fail.....", function(){
        console.log('Block five, a failing block');
        throw new Error();
    });
});

