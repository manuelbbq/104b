class Person {
    constructor(fname,lname,sex,bday ,weight) {
        this.fname = fname;
        this.lname = lname;
        this.sex = sex;
        this.bday = bday;
        this.weight = weight;
    }
    anrede(){
        return this.fname +' ' + this.lname
    }
    gesamtanrede(){
        return this.anrede() + ' ' + this.bday
    }
}

const person1 = new Person('Peter','Pan', 'm','05.08.1999',105);
const person2 = new Person('Claudia','Kleiner', 'w','01.01.2000',65);
const person3 = new Person('Günther','Pan', 'm','18.04.1999',80);
const person4 = new Person('Petra','Pan', 'w','18.04.1999',80);
const person5 = new Person('Frida','Fry', 'd','18.04.2023',72);
const gruppe = [person1, person2,person3,person4,person5]
let m = 0;
let w = 0;
let d = 0;
for (const person of gruppe) {
    if (person.sex === 'm'){
        m+=1;
    } else if(person.sex === 'w'){
        w+=1;
    } else {
        d+=1
    }
}
console.log(w,d,m)
console.log(person1.anrede())
console.log(person1.gesamtanrede())
console.log(person1)

class LKW{
    kennzeichen;
    leistung;
    ladekapazitaet;
    sitzte


    constructor(kennzeichen, leistung, ladekapazitaet, sitzte) {
        this.kennzeichen = kennzeichen;
        this.leistung = leistung;
        this.ladekapazitaet = ladekapazitaet;
        this.sitzte = sitzte;

    }
    static lade(array){
        let ladekapamax = 0;
        for (const lkw of array) {
            ladekapamax += lkw.ladekapazitaet;
        }
        return ladekapamax
    }
    static uber(array){
        let personen = 0;
        for (const lkw of array) {
            personen += lkw.sitzte;
        }
        return personen
    }






}
const lkw_0 = new LKW('abc',100, 3,5)
const lkw_1 = new LKW('def',200, 1,3)
const lkw_2 = new LKW('ijk',300, 7,2)
const lkw_3 = new LKW('lmn',4, 2,4)

const lkws = [lkw_0, lkw_1, lkw_2, lkw_3]

// function lade(array){
//     let ladekapamax = 0;
//     for (const lkw of array) {
//         ladekapamax += lkw.ladekapazität;
//     }
//     return ladekapamax
// }

function min_kapa(array){
    let minval= array[0].ladekapazitaet;
    for (let i = 0; i < array.length-1; i++) {
        if (array[i].ladekapazitaet< minval){
            minval=i;
        }
    }
    array.splice(minval,1);
}

console.log("Ladekap. " + LKW.lade(lkws));
let ladealt = LKW.lade(lkws);
console.log("Personen " + LKW.uber(lkws));
min_kapa(lkws);
console.log(lkws);


const lkw_4 = new LKW('xyz',22,9,1)
lkws.push(lkw_4);
console.log("Ladekap. " + LKW.lade(lkws))
let ladeneu = LKW.lade(lkws)
console.log("Personen " + LKW.uber(lkws))
console.log(lkws)
console.log(`Die Ladekapazität hat sich um ${ladeneu-ladealt}t geändert`)
lkws.sort(function (a,b) {
    return a.ladekapazitaet - b.ladekapazitaet
})
console.log(lkws)
class Herstelller {
    pls;
    anzahlMitarbeiter;
    name;
    constructor(pls, anzahlMitarbeiter, name) {
        this.pls = pls;
        this.anzahlMitarbeiter = anzahlMitarbeiter;
        this.name = name;
    }
}
const h1 = new Herstelller('50600',22000,'Ford');
const h2 = new Herstelller('12345',52000,'Schering');
const h3 = new Herstelller('23980',33000,'Airbus');
const herstellers = [h1,h2,h3];


herstellers.sort(function (a,b){
   let test =  a.name < b.name ? -1 :1;
   return test;
});
console.log("Name",herstellers)

herstellers.sort(function (a,b){
    let test =  a.pls < b.pls ? -1 :1;
    return test;
});
console.log("PLz",herstellers)

herstellers.sort((a,b)=>{
    let if_frage = a.anzahlMitarbeiter < b.anzahlMitarbeiter ? -1 : 1;
    return if_frage
})
console.log("Anzahl",herstellers)
