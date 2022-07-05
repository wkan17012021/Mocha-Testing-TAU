const chai = require('chai');

const expect = chai.expect; // expect variable only requires a reference to the expect function
// expect interface provides a function as a starting point for chaining language assertions. Whereas 

const should = chai.should(); // should variable requires the should function to be called
// should interface extends Object.Prototype to provide a single getter as the starting point for language assertions.
// there are some cases where should do not work: https://testautomationu.applitools.com/chai-test-assertions/chapter3.2.html

// assert keyword can also be used in chai and is different to the syntax used in Mocha. 
// const assert = chai.assert;
// https://testautomationu.applitools.com/chai-test-assertions/chapter4.html

// expect API examples

let a=1; b=1;

expect(a).to.be.equals(b, "Let's check if a and b are equal");

// run in node: node chai.js. Then check the thrown error- note the expressive text to contextualise the test.
// if you set a and b to the same number and re-run node, no error message will be seen.

// we can re-run this test with the should keyword.

a.should.be.equals(b);

function myObj() {
    return {
        a: 100,
        b:'Hello'
    }
}

let x = new myObj(); y = new myObj();
expect(x).to.be.an('object'); // expect x to be an object type.

expect(x).to.be.deep.equals(y, 'x and y are not equal'); // checks the value and data type are the same

// chaining as below. Best practice is to check for data type before checking if values are equal.
// expect(x).to.be.an('object').and.to.be.deep.equals(y);


// rewritten with should keyword
x.should.be.deep.equals(y, 'x and y are not equal');
(x).should.be.an('object').and.to.be.deep.equals(y);

let numbers = [1,2,3,4,5];

expect(numbers).to.be.an('array').that.includes(3); // remove 3 from array to test throw error

// with should keyword
(numbers).should.be.an('array').that.includes(3);