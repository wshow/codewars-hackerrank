/*
Max Score: 10
Difficulty: Easy
https://www.hackerrank.com/challenges/quicksort1
 */

 process.stdin.resume();
 process.stdin.setEncoding('ascii');
 var input = '';
 process.stdin.on('data', function (chunk) {
   input += chunk;
 });

 process.stdin.on('end', function () {
   var inArray = input.split('\n');
   var len = Number(inArray[0]);
   var v = inArray[1].split(' ').map(Number);
   var p = v[0];
   var part1 = [];
   var part2 = [];
   var i;

   for (i = 1; i < len; i++) {
     if (v[i] < p) {
       part1.push(v[i]);
     } else {
       part2.push(v[i]);
     }
   }

   process.stdout.write(part1.concat([p], part2).join(' ') + '\n');
 });
