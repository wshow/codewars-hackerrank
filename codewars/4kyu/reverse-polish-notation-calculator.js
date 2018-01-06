// https://www.codewars.com/kata/reverse-polish-notation-calculator/train/javascript

const opr = (c, x, y) => {
  switch (c) {
    case '+': return y + x;
    case '-': return y - x;
    case '*': return y * x;
    default: return y / x;
  }
};

const calc = expr => expr.split(' ').reduce((result, cur) => {
  if (/[+\-*/]/.test(cur)) {
    result.push(opr(cur, result.pop(), result.pop()));
  } else {
    result.push(+cur);
  }
  return result;
}, []).pop() || 0;

// global.calc = calc;
