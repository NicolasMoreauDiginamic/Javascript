function afficheBonjour(prenom){
    if(prenom = "" || typeof prenom !== 'string'){
        throw 'Veuillez entrer un prénom!';
    }
    let chaine = "Bonjour " + prenom + " !";
    return chaine;
}
let bjPrenom = afficheBonjour("Nicolas");
console.log(bjPrenom);