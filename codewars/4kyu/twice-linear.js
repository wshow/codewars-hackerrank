// https://www.codewars.com/kata/twice-linear/train/javascript

const dblLinear = (n) => {
  const arr = [1];
  let i1 = 0;
  let i2 = 0;
  for (; arr.length <= n;) {
    const y = 2 * arr[i1] + 1;
    const z = 3 * arr[i2] + 1;
    if (y < z) {
      arr.push(y);
      i1 += 1;
    } else if (z < y) {
      arr.push(z);
      i2 += 1;
    } else {
      arr.push(y);
      i1 += 1;
      i2 += 1;
    }
  }
  return arr[arr.length - 1];
};

// global.dblLinear = dblLinear;
