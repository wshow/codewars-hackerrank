require(__filename.replace('.test', ''));
const { Test } = require('../framework');

Test.assertEquals('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
Test.assertEquals('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');
