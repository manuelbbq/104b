// const multiplizieren = (zahl1, zahl2, zahl3)=>{
//     return zahl1 * zahl2 * zahl3;
// };
// console.log(multiplizieren(5,3,4));
//
// const quadriere= (basis, expo=2)=>{return Math.pow(basis,expo)};
// console.log(quadriere(25, 2));
//
// const wurzel= (basis)=>{return Math.sqrt(basis)};
// console.log(wurzel(25));
//
// const hypothenuse = (a,b)=>{
//     return quadriere((quadriere(a,2) + quadriere(b,2)),1/2);
// };
// console.log(hypothenuse(3,4));
// let sss = document.getElementById('555').firstElementChild.id;
// console.log(sss);
// const Person = function (fname, lname, sex, bday,weight){
//     this.fname = fname;
//     this.lname= lname;
//     this.sex= sex;
//     this.bday=bday;
//     this.weight= weight
// }
// Person.prototype.sayhallo = function (){
//     let anrede;
//     if (this.sex === "m"){
//         anrede = 'Herr';
//     } else if (this.sex === 'w'){
//         anrede = 'Frau';
//     } else {
//         anrede = 'no sex'
// //     };
// //     return `${anrede} ${this.fname} ${this.lname}`}
// person1 = new Person('Peter','Pan','m','15.5.1988',112);
// person2 = new Person('Claudia','Cloud','w','19.2.1977',68);
// person3 = new Person('Günther','Gun','m','01.8.1776',92)
// // console.log(person1.fname)
// // console.log(person1.sayhallo())
// // console.log(person2.fname)
// // console.log(person2.sayhallo())
// const persons = [person1,person2,person3];
// let maxweight = 0;
// for (const person of persons) {
//     maxweight += person.weight
// }
// let group = '';
// for (const person of persons) {
//     group += ' '+person.sayhallo();
// }
// console.log(group);
// // console.log(group,' wiegen '+ maxweight);
//         class Punkt {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//             }
//
//             static laenge(a, b) {
//                 const dx = a.x - b.x;
//                 const dy = a.y - b.y;
//
//                 return Math.sqrt(dx*dx + dy*dy);
//             }
//         }
//
//         const p1 = new Punkt(5, 5);
//         const p2 = new Punkt(10, 10);
//
//         console.log(Punkt.laenge(p1, p2));
class Tier {
    constructor(tier) {
        this.tier = tier;
    }
    sprich() {
        return this.tier;
    }

}

const obj = new Tier('lowe');
// let sprich = obj.sprich;
console.log(obj.sprich()); // undefined

// let iss = Tier.iss;
// console.log(iss()); // undefined