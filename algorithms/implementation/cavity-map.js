/*
Max Score: 30
Difficulty: Easy
https://www.hackerrank.com/challenges/cavity-map
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
   var grid = [];
   for (var grid_i = 0; grid_i < n; grid_i++) {
     grid[grid_i] = readLine().split('').map(Number);
   }
   for (var i = 1; i < n - 1; i++) {
     for (var j = 1; j < n - 1; j++) {
       if (
             grid[i][j] > grid[i - 1][j] &&
             grid[i][j] > grid[i + 1][j] &&
             grid[i][j] > grid[i][j - 1] &&
             grid[i][j] > grid[i][j + 1]
          )
         grid[i][j] = 'X';
     }
   }
   for (var i = 0; i < grid.length; i++) {
     console.log(grid[i].join(''));
   }
 }
