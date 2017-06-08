// https://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k/train/javascript

function getData(cur, curIndex) {
  if (typeof cur[curIndex] === 'undefined') {
    cur[curIndex] = String.fromCharCode(0);
  }
  return cur[curIndex];
}

function getDataCode(cur, curIndex) {
  return getData(cur, curIndex).charCodeAt(0);
}

function brainLuck(code, input) {
  const output = [];
  const cur = {};

  const loops = [];

  let curIndex = 0;
  let inputReadIndex = 0;
  for (let i = 0; i < code.length; i += 0) {
    const c = code[i];
    switch (c) {
      case ',': {
        cur[curIndex] = input[inputReadIndex++];
        break;
      }

      case '+': {
        let n = getDataCode(cur, curIndex) + 1;
        if (n === 256) n = 0;
        cur[curIndex] = String.fromCharCode(n);
        break;
      }

      case '-': {
        let n = getDataCode(cur, curIndex) - 1;
        if (n === -1) n = 255;
        cur[curIndex] = String.fromCharCode(n);
        break;
      }

      case '[': {
        loops.push(i);

        if (!getDataCode(cur, curIndex)) {
          loops.pop();

          let opens = 1;
          for (i += 1; i < code.length; ++i) {
            if (code[i] === '[') {
              ++opens;
            } else if (code[i] === ']') {
              --opens;
            }

            if (!opens) {
              break;
            }
          }
        }
        break;
      }

      case ']': {
        const x = loops.pop();
        if (getDataCode(cur, curIndex)) {
          i = x - 1;
        }
        break;
      }

      case '>': {
        curIndex++;
        break;
      }

      case '<': {
        curIndex--;
        break;
      }

      case '.': {
        output.push(getData(cur, curIndex));
        break;
      }

      default: {
        break;
      }
    }
  }

  return output.join('');
}

