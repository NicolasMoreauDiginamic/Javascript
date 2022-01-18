function verifTableau(tableau){
    if(!Array.isArray(tableau)){
        throw 'le paramétre doit étre un tableau';
    }
    let bool = true;
    if(tableau.length > 0){
        for(let i=0;i<tableau.length;i++){
            let value = tableau[i];
            if(typeof  value !== 'number'){
                bool = false;
                return bool;
            }
        }
        return bool;
    }else{
        bool = false;
        return bool;
    }
}
let array = [2,5,6,8,4];
let array2 = [4,9,3,"7",9,4];
let array3=[];
let result = verifTableau(array);
let result2 = verifTableau(array2);
let result3 = verifTableau(array3);
console.log(result);
console.log(result2);
console.log(result3);