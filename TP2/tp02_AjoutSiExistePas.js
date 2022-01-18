let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
let array2 = [-1,12,17,14,5,-9,0,18,-6,0,4,-13,5,7,-2,8,-1];
let valueArray1 = 0
let bool = false;
for(let i=0;i<array.length;i++){
    valueArray1 = array[i]
    for( let j=0; j<array2.length;j++){
        if(array2[j] === valueArray1){
            bool = true;
            break;
        }
    }
    if(bool == false){
        array2.push(valueArray1)
    }
}
console.log("Liste du tableau 2 avec les element du tableau 1 n'existant pas : " + array2);