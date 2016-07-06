/*
Max Score: 30
Difficulty: Easy
https://www.hackerrank.com/challenges/tutorial-intro
 */

 function processData(input) {
    // Enter your code here
   var inputs = input.split('\n');
   var search = inputs[0];
   var n = inputs[1];
   var arr = inputs[2].split(' ');
   for (var i = 0; i < n; i++) {
     if (arr[i] === search) {
       console.log(i);
     }
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
