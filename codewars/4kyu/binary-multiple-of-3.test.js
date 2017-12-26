require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global multipleOf3Regex */
Test.assertEquals(multipleOf3Regex.test(' 0'), false);
Test.assertEquals(multipleOf3Regex.test('abc'), false);
Test.assertEquals(multipleOf3Regex.test('000'), true);

Test.assertEquals(multipleOf3Regex.test('110'), true);
Test.assertEquals(multipleOf3Regex.test('111'), false);
Test.assertEquals(multipleOf3Regex.test((12345678).toString(2)), true);
