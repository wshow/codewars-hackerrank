/*
Max Score: 20
Difficulty: Easy
https://www.hackerrank.com/challenges/alternating-characters
 */

 function processData(input) {
   // Enter your code here
   var arr = input.split('\n');
   var n = arr[0];
   for (var i = 1; i <= n; i++) {
     var result = 0;
     for (var j = 1; j < arr[i].length; j++) {
       if (arr[i][j] === arr[i][j - 1]) {
         result ++;
       }
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
