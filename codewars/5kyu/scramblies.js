// http://www.codewars.com/kata/scramblies/train/javascript

const scramble = (str1, str2) => {
  const occurences = str1.split('').reduce((result, item) => {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
    return result;
  }, {});
  return str2.split('').every(character => --occurences[character] >= 0);
};

global.scramble = scramble;
