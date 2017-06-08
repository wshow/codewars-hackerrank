/*
Max Score: 30
Difficulty: Easy
https://www.hackerrank.com/challenges/quicksort2
 */

 process.stdin.resume();
 process.stdin.setEncoding('ascii');
 var input = '';

 process.stdin.on('data', function (chunk) {
   input += chunk;
 });

 function quicksort(v) {
   if (v.length <= 1) {
     return v;
   }

   var part1 = [];
   var part2 = [];
   var sorted1 = [];
   var sorted2 = [];
   var p = v[0];
   var i;

   for (i = 1; i < v.length; i++) {
     if (v[i] < p) {
       part1.push(v[i]);
     } else {
       part2.push(v[i]);
     }
   }

   sorted1 = quicksort(part1);

   sorted2 = quicksort(part2);

   var result = [].concat(sorted1, [p], sorted2);

   process.stdout.write(result.join(' ') + '\n');

   return result;
 }

 process.stdin.on('end', function () {
   var inArray = input.split('\n');
   var v = inArray[1].split(' ').map(function (element) {
     if (element) { return Number(element); }
   });
   var a = [];

   for (var i = 0; i < v.length; i++) {
     if (v[i]) a.push(v[i]);
   }

   quicksort(a);
 });
