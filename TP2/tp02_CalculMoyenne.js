let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
let i = 0;
let somme = 0;
let result = 0;
while(i<array.length){
    somme = somme + array[i++];
}
result = somme / array.length
console.log("La moyenne de la liste est : " + result);