let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
let chaineNbSup3 ="";
let chainePair ="";
let chaineImpair="";
for(let i=0; i<array.length;i++){
   if(array[i]>3){
    chaineNbSup3 = chaineNbSup3 + array[i] + ",";
   }

   if(array[i]%2 == 0){
        chainePair = chainePair + array[i] + ",";
   }else{
        chaineImpair = chaineImpair + array[i] + ",";
   }
}
chaineNbSup3 = chaineNbSup3.slice(0,-1);
chainePair = chainePair.slice(0,-1);
chaineImpair = chaineImpair.slice(0,-1);
console.log("Nombre supérieur à 3 : " + chaineNbSup3);
console.log("Nombre pair : " + chainePair);
console.log("Nombre impaire : " + chaineImpair);
