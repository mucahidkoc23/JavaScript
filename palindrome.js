const prompt = require("prompt-sync")({sigint:true});

let control=prompt("Yazacağım ifade palindrom mu? =>");
let check1=control.split("");
let check2=control.split("").reverse();
if(check1===check2){
  console.log("bu bir palindrom");
}
else{
  console.log("bu bir palindrome değil");
}