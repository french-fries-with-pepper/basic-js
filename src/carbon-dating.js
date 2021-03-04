const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if(typeof activity !== "string") return false;
  const n = parseFloat(activity);
  if(isNaN(n)||n<=0||n>15) return false;
  const result = Math.ceil((Math.log(MODERN_ACTIVITY/n))/(0.693/HALF_LIFE_PERIOD));
  return result;
};
