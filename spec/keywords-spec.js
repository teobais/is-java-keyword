var isKeyword = require('../index');

describe('#Testing suite', function() {
    
    describe("Testing all keywords", function () {
        it('all provided keywords should exist', function() {
            expect(isKeyword("test")).toBe(false);
            expect(isKeyword("abstract")).toBe(true);
            expect(isKeyword("continue")).toBe(true);
            expect(isKeyword("for")).toBe(true);
            expect(isKeyword("new")).toBe(true);
            expect(isKeyword("switch")).toBe(true);
            expect(isKeyword("assert")).toBe(true);
            expect(isKeyword("default")).toBe(true);
            expect(isKeyword("package")).toBe(true);
            expect(isKeyword("synchronized")).toBe(true);
            expect(isKeyword("boolean")).toBe(true);
            expect(isKeyword("do")).toBe(true);
            expect(isKeyword("if")).toBe(true);
            expect(isKeyword("private")).toBe(true);
            expect(isKeyword("this")).toBe(true);
            expect(isKeyword("break")).toBe(true);
            expect(isKeyword("double")).toBe(true);
            expect(isKeyword("implements")).toBe(true);
            expect(isKeyword("protected")).toBe(true);
            expect(isKeyword("throw")).toBe(true);
            expect(isKeyword("byte")).toBe(true);
            expect(isKeyword("else")).toBe(true);
            expect(isKeyword("import")).toBe(true);
            expect(isKeyword("public")).toBe(true);
            expect(isKeyword("throws")).toBe(true);
            expect(isKeyword("case")).toBe(true);
            expect(isKeyword("enum")).toBe(true);
            expect(isKeyword("instanceof")).toBe(true);
            expect(isKeyword("return")).toBe(true);
            expect(isKeyword("transient")).toBe(true);
            expect(isKeyword("catch")).toBe(true);
            expect(isKeyword("extends")).toBe(true);
            expect(isKeyword("int")).toBe(true);
            expect(isKeyword("short")).toBe(true);
            expect(isKeyword("try")).toBe(true);
            expect(isKeyword("char")).toBe(true);
            expect(isKeyword("final")).toBe(true);
            expect(isKeyword("interface")).toBe(true);
            expect(isKeyword("static")).toBe(true);
            expect(isKeyword("void")).toBe(true);
            expect(isKeyword("class")).toBe(true);
            expect(isKeyword("finally")).toBe(true);
            expect(isKeyword("long")).toBe(true);
            expect(isKeyword("strictfp")).toBe(true);
            expect(isKeyword("volatile")).toBe(true);
            expect(isKeyword("float")).toBe(true);
            expect(isKeyword("native")).toBe(true);
            expect(isKeyword("super")).toBe(true);
            expect(isKeyword("while")).toBe(true);
        });
    });
});

   
