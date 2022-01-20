function connexionDonnees(){
    /*fetch("https://restcountries.com/v3.1/all")
    .then(function(res){
        return res.text();
    })
    .then(function(text){
        console.log(text);

        /* Affichage dans le body */
        /*AfficherDonnees(text);
        
    })*/
    let req = new XMLHttpRequest();
    req.open("GET","https://restcountries.com/v3.1/all");
    req.onload = function(){
        let donnees = req.responseText;
        /*console.log(req.responseText);*/

        /*TP6.1*/
        /*AfficherDonnees(donnees);*/

        /*TP6.2*/
        /*AfficherPaysCapitale(donnees)*/

        /*TP6.3**/
        AfficherPaysCapitale(donnees)
    }
    req.send();
}
function AfficherDonnees(data){
    let contenu = document.querySelector("body");
    contenu.innerHTML = data;
}
function AfficherPaysCapitale(data){
    let json = JSON.parse(data);
    /*console.log(json);*/
    /*let contenu = document.querySelector("body");*/
    for(let i=0; i< json.length;i++){
        let nom = json[i].name.common;
        let population = json[i].population
        let capitale = json[i].capital;
        /*let result = "nom : " + nom + " - population : " + population + " - capitale : " + capitale + " / ";
        contenu.innerHTML = contenu.innerHTML + result*/
        let ol = document.createElement("ol");
        document.ul.appendChild(ol);

        let liNom = document.createElement("li");
        let textNom = document.createTextNode("nom : " + nom);
        liNom.appendChild(textNom);
        document.ol.appendChild(liNom);

        let liPop = document.createElement("li");
        let textPop = document.createTextNode("Population : " + population);
        liPop.appendChild(textPop);
        document.ol.appendChild(liPop);

        let liCap = document.createElement("li");
        let textCap = document.createTextNode("Capitale : " + capital);
        liCap.appendChild(textCap);
        document.ol.appendChild(liCap);
        

        


    }
}