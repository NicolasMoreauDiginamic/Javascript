let societe = {
    "nom" : "Google",
    "siegeSocial" : "Googleplex, Mountain View, California, United States",
    "fondateur" : [
        {"nom" : "Larry Page","dateNaissance" : "26/03/1973", "villeNaissance" : "East Lansing, Michigan"},
        {"nom" : "Sergey Brin","dateNaissance" : "21/08/1973", "villeNaissance" : "Moscou, Union Soviétique"}
    ],
    "chiffreAffaire" : [
        {"annee" : 2008, "valeur" : 16.49},
        {"annee" : 2012, "valeur" : 37.97},
        {"annee" : 2016, "valeur" : 89.46},
        {"annee" : 2018, "valeur" : 136.2}

    ]
};

for(let i = 0; i<societe.fondateur.length; i++){
    console.log(societe.fondateur[i].nom);
}
for(let j = 0; j<societe.chiffreAffaire.length; j++){
    console.log(societe.chiffreAffaire[j].valeur);
}