/*
Max Score: 80
Difficulty: Difficult
https://www.hackerrank.com/challenges/matrix-rotation-algo
 */

 using System;
 using System.Collections.Generic;
 using System.Linq;
 using System.Text;
 using System.Threading.Tasks;

 namespace matrixRotate
 {
     class Program
     {
         static void Main(string[] args)
         {
             string header = Console.ReadLine();
             string[] headerParts = header.Split(' ');

             int IN_ROW = Convert.ToInt32(headerParts[0]);
             int IN_COL = Convert.ToInt32(headerParts[1]);
             int IN_ROTATE = Convert.ToInt32(headerParts[2]);

             int[,] inMatrix = new int[IN_ROW, IN_COL];


             for (var iRow = 0; iRow < IN_ROW; iRow++)
             {
                 string row = Console.ReadLine();
                 string[] cols = row.Split(' ');

                 for (var iCol = 0; iCol < IN_COL; iCol++)
                 {
                     int intC = Convert.ToInt32(cols[iCol]);

                     inMatrix[iRow, iCol] = intC;
                 }

             }

             int[,] outMatrix = new int[IN_ROW, IN_COL];
             int levels = Math.Min(IN_ROW, IN_COL) / 2;

             List<List<Tuple<int,int>>> levelPaths = new List<List<Tuple<int,int>>>();

             for (int currentLevel = 0; currentLevel < levels; currentLevel++)
             {

                 int rowMargin = IN_ROW - currentLevel;

                 List<Tuple<int, int>> top = new List<Tuple<int, int>>();
                 List<Tuple<int, int>> right = new List<Tuple<int, int>>();
                 List<Tuple<int, int>> bottom = new List<Tuple<int, int>>();
                 List<Tuple<int, int>> left = new List<Tuple<int, int>>();

                 for (int row = currentLevel; row < rowMargin; row++)
                 {
                     int colMargin = IN_COL - currentLevel;
                     int colSkip = ((IN_COL - 2) - currentLevel * 2) +1;

                     if (row == currentLevel || row == rowMargin - 1)
                     {
                         colSkip = 1;
                     }


                     for (int col = currentLevel; col < colMargin; col+=colSkip)
                     {

                         if (row == currentLevel)
                         {
                             top.Add(new Tuple<int, int>(row, col));
                         }
                         else if (row == rowMargin - 1)
                         {
                             bottom.Insert(0, new Tuple<int, int>(row, col));
                         }
                         else if (col == currentLevel)
                         {
                             left.Insert(0, new Tuple<int, int>(row, col));
                         }
                         else if (col == colMargin-1)
                         {
                             right.Add(new Tuple<int, int>(row, col));
                         }

                     }

                 }

                 levelPaths.Add(top.Concat<Tuple<int, int>>(right).Concat<Tuple<int, int>>(bottom).Concat<Tuple<int, int>>(left).ToList<Tuple<int, int>>());

             }

             foreach(List<Tuple<int,int>> t in levelPaths){

                 int startIdx = IN_ROTATE % t.Count;

                 for(int i=startIdx; i<t.Count+startIdx; i++){

                     int newIdx = i;

                     if (newIdx >= t.Count)
                     {
                         newIdx = i % t.Count;
                     }

                     int oldIdx = newIdx - startIdx;

                     if (oldIdx < 0)
                     {
                         oldIdx = (i - startIdx);
                     }

                     Tuple<int, int> newCord = t[newIdx];
                     Tuple<int, int> oldCord = t[oldIdx];

                     outMatrix[oldCord.Item1, oldCord.Item2] = inMatrix[newCord.Item1, newCord.Item2];
                 }

             }

             for (int outRow = 0; outRow < IN_ROW; outRow++)
             {
                 for (int outCol = 0; outCol < IN_COL; outCol++)
                 {
                     Console.Write(outMatrix[outRow,outCol] + " ");
                 }
                 Console.WriteLine("");
             }
         }

     }
 }
