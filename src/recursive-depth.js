 const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
      let level = array.filter((el)=>Array.isArray(el));
      if(level.length===0)return 1;
      let next =[];
      for(let i = 0; i <level.length; i++){
        next.push(...level[i]);
      }
      return 1+this.calculateDepth(next);
    }
};