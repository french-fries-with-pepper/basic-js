const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  const res = [];
  const n = arr.length;
  //console.log(arr);
  const controls = new Set([
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ]);
  for (let i = 0; i < n; i++) {
    const el = arr[i];
    if (!controls.has(el)) {
      res.push(el);
      continue;
    }
    switch (el) {
      case "--discard-next":
        if (i + 1 < arr.length) i++;
        break;
      case "--discard-prev":
        if (res.length&&(arr[i-2]!=="--discard-next")) res.pop();
        break;
      case "--double-next":
        if (i + 1 < arr.length) res.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (res.length&&arr[i-2]!=="--discard-next") res.push(res[res.length - 1]);
        break;
    }
  }
  return res;
}

//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
