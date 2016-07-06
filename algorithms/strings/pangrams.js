/*
Max Score: 20
Difficulty: Easy
https://www.hackerrank.com/challenges/pangrams
 */

 function processData(input) {
     // Enter your code here
   var result = 'pangram';
   for (var i = 97; i <= 122; i++) {
     if (input.toLowerCase().indexOf(String.fromCharCode(i)) === -1) {
       result = 'not pangram';
       break;
     }
   }
   console.log(result);
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
