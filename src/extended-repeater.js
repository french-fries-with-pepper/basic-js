const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = [];
  let addRes = [];
  const nOfAdds = options.hasOwnProperty("additionRepeatTimes")&&(typeof(options.additionRepeatTimes)==="number")
    ? options.additionRepeatTimes
    : 1;
  for (let i = 0; i < nOfAdds; i++){
    if(options.addition===null){
      addRes.push("null");
      continue;
    }
    addRes.push(options.addition);
  }
  
  const as = options.hasOwnProperty("additionSeparator")
    ? options.additionSeparator
    : "|";
  const suffix = addRes.join(as);
  const part = str+suffix;

  const rt = options.hasOwnProperty("repeatTimes")&&(typeof(options.repeatTimes)==="number")
    ? options.repeatTimes
    : 1;
  
  for (let i = 0; i < rt;i++)
    res.push(part);
  const sep = options.hasOwnProperty("separator")
    ? options.separator
    : "+";
  return res.join(sep);
};