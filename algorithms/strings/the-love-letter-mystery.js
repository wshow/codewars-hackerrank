/*
Max Score: 20
Difficulty: Easy
https://www.hackerrank.com/challenges/the-love-letter-mystery
 */

 function processData(input) {
     // Enter your code here
   var arr = input.split('\n');
   var n = arr[0];
   for (var i = 1; i <= n; i++) {
     var result = 0;
     var len = arr[i].length;
     for (var j = 0; j < (len % 2 === 1 ? (len - 1) / 2 : len / 2); j++) {
       result += Math.abs(arr[i].charCodeAt(len - j - 1) - arr[i].charCodeAt(j));
     }
     console.log(result);
   }
 }

 process.stdin.resume();
 process.stdin.setEncoding('ascii');
 var _input = '';
 process.stdin.on('data', function (input) {
   _input += input;
 });

 process.stdin.on('end', function () {
   processData(_input);
 });
