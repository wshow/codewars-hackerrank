/*
Max Score: 100
Difficulty: Difficult
https://www.hackerrank.com/challenges/sherlock-and-valid-string
 */

 function processData(input) {
   // Enter your code here
   var source = input.split('\n').shift();
   var counter = [];
   var i = 0;
   for (i = 0; i < 30; i++) {
     counter[i] = 0;
   }

   var maxCounter = 0;

   for (i = 0; i < source.length; i++) {
     var index = source.charCodeAt(i) - 97;
     counter[index] ++;

     if (counter[index] > maxCounter) { maxCounter = counter[index]; }
   }

   var atOne = 0;
   var atMax = 0;
   var atMaxMinus = 0;
   var atOther = 0;

   for (i = 0; i < 30; i++) {
     if (counter[i] >= maxCounter - 1) {
       if (counter[i] === maxCounter) {
         atMax++;
       } else {
         atMaxMinus ++;
       }
     } else {
       if (counter[i] < 2) {
         if (counter[i] === 1) { atOne ++; }
       } else {
         atOther ++;
       }
     }
   }
   if (maxCounter < 2) {
     console.log('YES');
     return;
   }
   if ((atOther > 0) || (atOne > 1)) {
     console.log('NO');
     return;
   }

   if ((atMax > 1) && (atMaxMinus > 0) && (maxCounter > 2)) {
     console.log('NO');
     return;
   }

   if ((atMax > 1) && (atMaxMinus > 1) && (maxCounter === 2)) {
     console.log('NO');
     return;
   }

   if ((atOne > 0) && (atMaxMinus > 0)) {
     console.log('NO');
     return;
   }

   console.log('YES');
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
