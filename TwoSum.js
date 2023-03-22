const prompt = require("prompt-sync")({sigint:true});

(function sum() {
  const array = [];
  let target=prompt("what is the target:");
  let flag=1;
  while(true){
    let deger =prompt(`Enter the ${flag}.value:`);    
    flag++;
    if(deger==='x'){
      for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
          if(Number(array[i])+Number(array[j])===Number(target))
          {
            console.log("successful"); 
            return;
          } 
        }
      }
      console.log("unsuccessful");
      break;
    } 
    array.push(deger);
  }
  console.log(array)
})();
