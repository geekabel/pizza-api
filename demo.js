'use strict';

const myname = 'Godwin';
const entier  = 415;
console.log(`Bienvenue ${myname}`);

function demo(name) {
    console.log(`voici mon nom ${name}`);
}
demo('wuni');
/*
function temporalExample() {
    const f = () => {
        console.log(value);
    };
    let value = 42;
    f();
}
temporalExample();*/

//let {nom, prenom, age} = naissance;
const naissance = {nom:'kodjo', prenom:'', age:' '};
let  informations = ["nom", "prenom", "age", "village"];

for(let i=0; i < informations.length; i++){
    console.log(informations[i]);
   
}
//console.log('je mappelle '+ informations.nom + informations.prenom + 'et jai ' + naissance.age);
informations.forEach(element => {
   console.log("element avec forEach",element.slice(0,3));
});

 naissance.nom = 'tao';
 naissance.prenom = 'godwin';
 naissance.age = 18 + ' ans';
 console.log('Naissance object :',naissance);
console.log(informations);


 //console.log(`mon nom est ${naissance}`);