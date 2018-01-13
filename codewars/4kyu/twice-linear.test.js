require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global dblLinear */
function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

Test.describe('dblLinear', () => {
  Test.it('Basic tests', () => {
    testing(dblLinear(10), 22);
    testing(dblLinear(20), 57);
    testing(dblLinear(30), 91);
    testing(dblLinear(50), 175);
    testing(dblLinear(100), 447);
    testing(dblLinear(60000), 1511311);
  });
});
