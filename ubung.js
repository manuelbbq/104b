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
// class Tier {
//     constructor(tier) {
//         this.tier = tier;
//     }
//     sprich() {
//         return this.tier;
//     }
//
// }
//
// const obj = new Tier('lowe');
// // let sprich = obj.sprich;
// console.log(obj.sprich()); // undefined

// let iss = Tier.iss;
// console.log(iss()); // undefined
//
//
//
//
//
//
//
//
//
//
//
//
//
// class Zaehler{
//      static count = 0;
//     constructor( max_count) {
//         // this.count = count;
//         this.max_count = max_count
//
//     }
//     zaehlen(zahl){
//         if (Zaehler.count+zahl > this.max_count){
//             document.getElementById('abc').innerHTML = 'to many people';
//         } else {
//             Zaehler.count += zahl
//             document.getElementById('abc').innerHTML =`${Zaehler.count} people are in. (max. people ${this.max_count})`;
//         }
//     }
// }
// const zaehler1 = new Zaehler(10);
// const zaehler2 = new Zaehler(10);
// document.getElementById('but').addEventListener('click', ()=>{zaehler1.zaehlen(1)})
// document.getElementById('but2').addEventListener('click', ()=>{zaehler2.zaehlen(parseInt(document.getElementById('num').value));
// counterp2()});
// function counterp1(){
//     zaehler1.zaehlen(1);
// }
// function counterp2(){
//     document.getElementById('num').value = 0;
// }
//
// class Boy_cars{
//     static count = 0;
//     name;
//     ps;
//     color;
//
//
//     constructor(name, ps, color) {
//         if(Boy_cars.count >= 4){
//             console.log('Boy u have to many cars')
//         } else {
//             this.name = name;
//             this.ps = ps;
//             this.color = color;
//             Boy_cars.count++
//         }
//     }
//     static test(){
//         console.log(this)
//     }
// }
// const cars = [];
// cars.push(new Boy_cars('Porsche',200,'green'));
// // cars.push(new Boy_cars('VW',75,'black'));
// // cars.push(new Boy_cars('BMW',120,'blue'));
// // cars.push(new Boy_cars('Ente',25,'red'));
// function new_car() {
//     cars.push(new Boy_cars('audi',100,'black'))
// }
// document.getElementById('but3').addEventListener('click',new_car)
//
//
//
//
// class Schulleiter {
//     fname;
//     lname;
//     static obj;
//
//     constructor(fname, lname) {
//         if (Schulleiter.obj === undefined){
//
//         this.fname = fname;
//         this.lname = lname;
//         Schulleiter.obj = this;
//         console.log('Der Eine')
//         } else {
//             console.log('Es kann nur einen geben');
//         }
//     }
// }
// let schulleiter ;
// function create_schulleiter(fname, lname){
//     schulleiter = new Schulleiter(fname,lname)
//
// }
// document.getElementById('but4').addEventListener('click',()=>{create_schulleiter('hans','hansson')});
//

const arr = [2,4,6];
arr[4]= 8;
const obj = {
    fname : 'peter',
    lname : 'pan'
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
for (const number of arr) {
    console.log(number)
}
for (const arrKey in arr) {
    console.log(arr[arrKey])
}

const  html = document.body.children;
console.log('html ',html.length)
for (const objKey in arr) {
    console.log(objKey);
}
console.log('_________________________________')
let td_gesamt = 0;
for (const td of document.getElementsByTagName('td')) {
    // console.log(Number(td.innerHTML))
    td_gesamt += Number(td.innerHTML)
    td.addEventListener('click',()=>{console.log(td.innerHTML)})
}
console.log(td_gesamt)








