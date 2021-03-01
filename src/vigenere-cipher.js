const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isDirect = true;
  AL = 26;
  constructor(isDirect = true){
    this.isDirect = isDirect;
  }
  encrypt(message,key) {
    if(!message||!key)
      throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyString = "";
    for(let i = 0; i <message.length; i++)
      keyString+=key[i%key.length];
    let res = "";
    for (let i = 0, count = 0; i <message.length; i++){
      const elCode = message[i].charCodeAt(0);
      if(elCode<65||elCode>90){
        res += message[i];
        continue;
      } 
      const keyCode = keyString[count].charCodeAt(0);
      count++;
      res+=String.fromCharCode(((keyCode+elCode)%this.AL)+65)
    }
    return this.isDirect?res:res.split("").reverse().join("");
  }    
  decrypt(message,key) {
    key = key.toUpperCase();
    let keyString = "";
    for(let i = 0; i <message.length; i++)
      keyString+=key[i%key.length];
    let res = "";
    for (let i = 0, count = 0; i <message.length; i++){
      const elCode = message[i].charCodeAt(0);
      if(elCode<65||elCode>90){
        res += message[i];
        continue;
      } 
      const keyCode = keyString[count].charCodeAt(0);
      count++;
      res+=String.fromCharCode(((elCode+this.AL-keyCode)%this.AL)+65)
    }
    return this.isDirect?res:res.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
