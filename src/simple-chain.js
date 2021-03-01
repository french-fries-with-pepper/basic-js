const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position - 1 >= 0 && position - 1 < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let i = 0; i < this.arr.length; i++) 
      res += `~( ${this.arr[i]} )~`;
    res = res.slice(0, -1);
    res = res.substring(1);
    this.arr = [];
    return res;
  },
};

module.exports = chainMaker;
