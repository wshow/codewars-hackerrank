/*
Max Score: 25
Difficulty: Moderate
https://www.hackerrank.com/challenges/two-strings
 */

 function processData(input) {
     // Enter your code here
   var arr = input.split('\n');

   for (var i = 1; i <= 2 * parseInt(arr[0], 10); i += 2) {
     var YES = false;
     arr[i].split('').map(function (x) {
       if (arr[i + 1].indexOf(x) !== -1) {
         YES = true;
       }
     });
     console.log(YES ? 'YES' : 'NO');
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
