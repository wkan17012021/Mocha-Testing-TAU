// Addition
// Subtraction
// Multiplication
// Division

const assert = require("assert");
const { setTimeout } = require("timers");

describe("Mathematical Ops - Test Suite", function () {
  //append .only to 'it' to tell Mocha to only run this it() block
  //append .skip to 'it' to tell Mocha to skip this it() block. Note that this test will be noted as pending.
//   this.timeout(1000); // here we are saying all tests within the described block must be completed in 1000 ms. This is a suite level timeout and does not require passing 'done' argument into the callback function parameter.
  let a = 10;
  let b = 10;

  // This is an example of a timeout within a hook. Comment out thebeforeEach block to run the rest of the code //
//   beforeEach(function (done) {
//     this.timeout(500);
//     setTimeout(done, 3000);
//   });

  it("Addition of two numbers", function () {
    // setTimeout(done, 2000); // we have set a test-level timeout. Because it is set to timeout after 2000 ms, it exceeds the threshold timeout above on line 12. Note for test-level, we need to pass 'done' as a parameter to the callback and 'done' in the setTimeout function itself. Comment out to run the rest of the code.
    let c = a + b;
    assert.strictEqual(c, 20);
  });
  it("Subtraction of two numbers", function () {
    let c = a - b;
    assert.strictEqual(c, 0);
  });
  it("Multiplication of two numbers", function () {
    let c = a * b;
    assert.strictEqual(c, 100);
  });
  it("Division of two numbers", function () {
    let c = a / b;
    assert.strictEqual(c, 1);
  });
});
