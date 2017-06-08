/*
Max Score: 25
Difficulty: Moderate
https://www.hackerrank.com/challenges/the-time-in-words
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

 var numbers = {
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine',
   10: 'ten',
   11: 'eleven',
   12: 'twelve',
   13: 'thirteen',
   14: 'forteen',
   15: 'fifteen',
   16: 'sixteen',
   17: 'seventeen',
   19: 'nineteen',
   20: 'twenty'
 };

 for (var i = 21; i < 30; i++) {
   numbers[i] = numbers[20] + ' ' + numbers[i - 20];
 }
 function main() {
   var h = parseInt(readLine());
   var m = parseInt(readLine());
   switch (m) {
     case 59: {
       console.log('one minute to %s', numbers[h + 1]);
       break;
     }
     case 45: {
       console.log('quarter to %s', numbers[h + 1]);
       break;
     }
     case 30: {
       console.log('half past %s', numbers[h]);
       break;
     }
     case 15: {
       console.log('quarter past %s', numbers[h]);
       break;
     }
     case 1: {
       console.log('one minute past %s', numbers[h + 1]);
       break;
     }
     case 0: {
       console.log('%s o\' clock', numbers[h]);
       break;
     }
     default: {
       if (m > 30) {
         console.log('%s minutes to %s', numbers[60 - m], numbers[h + 1]);
       }
       else {
         console.log('%s minutes past %s', numbers[m], numbers[h]);
       }
     }
   }
 }
