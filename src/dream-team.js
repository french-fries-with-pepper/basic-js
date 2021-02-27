const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members||!members.length)
    return false;
  let strArr = members.filter((el)=>typeof(el)==="string");
  if(!strArr.length)
    return false;
  strArr = strArr.map((el)=>el.trim().toUpperCase());
  strArr.sort();
  let res = "";
  strArr.forEach((el)=>{
    res+=el[0];
  })
  return res;
};
