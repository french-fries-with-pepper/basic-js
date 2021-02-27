const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!matrix||!matrix.length)
    return 0;
  let result = 0;
  const n = matrix.length;
  for(let i = 0; i < n;i++){
    const cur = matrix[i];
    cur.forEach((el)=>{
      if(el==="^^")
        result++;
    })
  }
  return result;
};
