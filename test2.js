const assert = require("assert");
const describe = require("./program2");
 
describe("Test cases for decodeTheRing function", function () {
  it(`Returns true for "hello", "h*llo"`, function () {
    const result = decodeTheRing("hello", "h*llo");
    assert.equal(result, true);
  });
 
  it(`Returns false for "secret", "sec?"`, function () {
    const result = decodeTheRing("secret", "sec?");
    assert.equal(result, false);
  });
 
  it(`Returns false for "codeword", "c*de"`, function () {
    const result = decodeTheRing("codeword", "c*de");
    assert.equal(result, false);
  });
});

