require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global scramble */
Test.assertEquals(scramble('rkqodlw', 'world'), true);
Test.assertEquals(scramble('cedewaraaossoqqyt', 'codewars'), true);
Test.assertEquals(scramble('katas', 'steak'), false);
Test.assertEquals(scramble('scriptjava', 'javascript'), true);
Test.assertEquals(scramble('scriptingjava', 'javascript'), true);
Test.assertEquals(scramble('scriptsjava', 'javascripts'), true);
Test.assertEquals(scramble('jscripts', 'javascript'), false);
Test.assertEquals(scramble('aabbcamaomsccdd', 'commas'), true);
