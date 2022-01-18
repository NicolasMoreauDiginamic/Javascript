function calculMoyenne(tableau){
    if(!Array.isArray(tableau)){
        throw 'le paramétre doit étre un tableau';
    }
    if(tableau.length > 0){
        let somme = 0;
        let result = 0;
        for(let i=0;i<tableau.length;i++){
            if(typeof  tableau[i] !== 'number'){
                throw 'veuillez rentrer que des valeurs numériques dans le tableau';
            }
            somme = somme + tableau[i];
        }
        result = somme / tableau.length;
        return result;
    }else{
        return 0
    }
}

let array = [2,5,6,8,4,-9,45,12,7,3];
let result = calculMoyenne(array);
console.log(result);

let array2=[];
let result2 = calculMoyenne(array2);
console.log(result2);

let array3 = [5,8,9,"65",3,8,"25",10]
let result3 = calculMoyenne(array3);
console.log(result3);
