/*
Max Score: 30
Difficulty: Easy
https://www.hackerrank.com/challenges/insertionsort2
 */

 process.stdin.resume();
 process.stdin.setEncoding('ascii');

 var output = '';

 function insertionSort(a) {
   for (var i = 1, len = a.length; i < len; i++) {
     var key = a[i];
     var j = i;
     while (j > 0 && a[j - 1] > key) {
       a[j] = a[j - 1];
       j--;
     }
     a[j] = key;
     output += a.join(' ') + '\n';
   }
 }

 process.stdin.on('data', function (input) {
   var inArray = input.split('\n');
   var v = inArray[1].split(' ');

   for (var i = 0; i < v.length; i++) {
     v[i] = Number(v[i]);
   }

   insertionSort(v);
   process.stdout.write(output);
 });
