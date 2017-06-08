// https://www.codewars.com/kata/base64-encoding/train/javascript

// Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function () {
  return new Buffer(`${this}`).toString('base64');
};

String.prototype.fromBase64 = function () {
  return new Buffer(`${this}`, 'base64').toString('ascii');
};
