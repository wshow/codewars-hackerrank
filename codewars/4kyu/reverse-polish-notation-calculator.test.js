require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global calc */
Test.assertEquals(calc(''), 0, 'Should work with empty string');
Test.assertEquals(calc('1 2 3'), 3, 'Should parse numbers');
Test.assertEquals(calc('1 2 3.5'), 3.5, 'Should parse float numbers');
Test.assertEquals(calc('1 3 +'), 4, 'Should support addition');
Test.assertEquals(calc('1 3 *'), 3, 'Should support multiplication');
Test.assertEquals(calc('1 3 -'), -2, 'Should support subtraction');
Test.assertEquals(calc('4 2 /'), 2, 'Should support division');
