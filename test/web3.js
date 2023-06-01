const Kitili = artifacts.require("kitili");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Kitili", function (/* accounts */) {
  it("should assert true", async function () {
    await Kitili.deployed();
    return assert.isTrue(true);
  });
});
