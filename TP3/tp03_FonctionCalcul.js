function calcul(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw 'Vous devez fournir des nombres en paramètres';
    }
    let result = a * b + a + b;
    return result;
}
let nombre = calcul(5,9);
console.log(nombre);