=begin
/*
Max Score: 20
Difficulty: Moderate
https://www.hackerrank.com/challenges/extra-long-factorials
 */
=end

 #!/bin/ruby
 def f(n)
   i = 1
   while n > 0
     i *= n
     n -= 1
   end
   return i
 end
 n = gets.strip.to_i
 puts f(n)
