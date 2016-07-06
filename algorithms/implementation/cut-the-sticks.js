/*
Max Score: 25
Difficulty: Easy
https://www.hackerrank.com/challenges/cut-the-sticks
 */

 process.stdin.resume();
 process.stdin.setEncoding('ascii');

 var input_stdin = '';
 var input_stdin_array = '';
 var input_currentline = 0;

 process.stdin.on('data', function (data) {
   input_stdin += data;
 });

 process.stdin.on('end', function () {
   input_stdin_array = input_stdin.split('\n');
   main();
 });

 function readLine() {
   return input_stdin_array[input_currentline++];
 }

 // ///////////// ignore above this line ////////////////////

 function main() {
   var n = parseInt(readLine());
   arr = readLine().split(' ');
   arr = arr.map(Number);
   while (arr.length > 0) {
     var tmp = arr.length;
     for (var i = 0; i < arr.length; i++) {
       if (--arr[i] === 0) {
         arr.splice(i--, 1);
       }
     }
         // console.log(tmp,arr);
     if (arr.length !== tmp) {
       console.log(tmp);
     }
   }
 }
