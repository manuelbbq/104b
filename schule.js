class Schueler{
    sex;
    bday;
    fname;
    lname;

    constructor(sex, bday, fname, lname) {
        this.sex = sex;
        this.bday = bday;
        this.fname = fname;
        this.lname = lname;
    }
}
class Klasse {


    name;

    constructor(name) {
        this.name = name;
        this._schueler = [];
    }

    set schueler(value) {
        this._schueler.push(value);
    }
    get schueler() {
        return this._schueler;
    }
}

class Schule {
    constructor(name ) {
        this.name = name;
        this._klassen = [];
    }


    get klassen() {
        return this._klassen;
    }

    set klassen(value) {
        this._klassen.push(value);
    }
    alleschuele_arry(klasse_name){
        this._alleschueler = [];
        if (klasse_name === undefined) {
            this.klassen.forEach((x) => {
                x.schueler.forEach((y) => {
                    this._alleschueler.push(y);
                })
            })
        } else {
            this.klassen.forEach((x)=>{
                if(klasse_name === x.name ){
                    x.schueler.forEach((y) => {
                        this._alleschueler.push(y);
                    })

                }


            })

        }
        return this._alleschueler
    }
    sort_abc(arry){
        arry.sort(function (a,b){
            if (a.fname > b.fname){
                return 1
            } else if(a.fname < b.fname) {
                return -1
            } else {
                return 0
            }
        })
    }

    sort_bday(arry){
        arry.sort(function (a,b){
            if (make_date(a.bday)< make_date(b.bday)){
                return 1
            } else if (make_date(a.bday) > make_date(b.bday)) {
                return -1
            } else {
                return 0
            }
        })



    }

    schueler_namen(klassen_name, sort){
        const schueler_list = this.alleschuele_arry(klassen_name);
        if (sort !== undefined){
            sort(schueler_list);
        }



        schueler_list.forEach((x)=>{
            console.log(x.fname + ' '+ x.bday);
        })
    }
}






const klasse1 = new Klasse("104a");
klasse1.schueler = new Schueler('m','08.15.2001','ZAlf','Alfonson');
klasse1.schueler = new Schueler('m','11.20.1999','Bernd','Berndson');
klasse1.schueler = new Schueler('w','02.02.2002','Carla','Carlason');


// const klasse1 ={
//     name : "104a",
//     schueler : [s1,s2,s3]
// }


const klasse2 = new Klasse("104b");
klasse2.schueler = new Schueler('m','12.08.1980','XDieter','Dieterson');
klasse2.schueler = new Schueler('w','07.30.2010','Emma','Emmason');
klasse2.schueler = new Schueler('w','12.12.2012','Frieda','Friedason');
// const klasse2 ={
//     name:"104b",
//     schueler : [s4,s5,s6]
// }
const bbq = new Schule('BBQ');
bbq.klassen= klasse1;
bbq.klassen= klasse2;
console.log('_________________________________Klasse104a______________________________')

for (let schueler of klasse1.schueler) {
    console.log(schueler.fname);

}
console.log('_________________________________KLasse104b______________________________')


for (let schueler of klasse2.schueler) {
    console.log(schueler.fname);

}
const allSchu = klasse1.schueler.concat(klasse2.schueler);
console.log('_________________________________Alle klassen______________________________')



console.log(allSchu)
allSchu.forEach((x)=>{return console.log(x.fname)})
console.log('_________________________________Alle klassen ABC______________________________')

allSchu.sort(function (a,b){
    if (a.fname > b.fname){
        return 1
    } else if(a.fname < b.fname) {
        return -1
    } else {
        return 0
    }
})
allSchu.forEach((x)=>{return console.log(x)})

function make_date(datestring){
    date = new Date(datestring);
    return date
}
// console.log(make_date(allSchu[0].bday));

allSchu.sort(function (a,b){
    if (make_date(a.bday)< make_date(b.bday)){
        return 1
    } else if (make_date(a.bday) > make_date(b.bday)) {
        return -1
    } else {
        return 0
    }
})

console.log('_________________________________DATE______________________________')
allSchu.forEach((x)=>{return console.log(x.fname +" " +  x.bday)})


console.log('_________________________________________104a___________________')

bbq.schueler_namen('104a')
console.log('_________________________________________104b___________________')

bbq.schueler_namen('104b')
console.log('_________________________________________Schulealle___________________')

bbq.schueler_namen()

console.log('_________________________________________Schulealle abc___________________')
bbq.schueler_namen(undefined,bbq.sort_abc)
console.log('_________________________________________Schulealle bday___________')
bbq.schueler_namen(undefined,bbq.sort_bday)
console.log('_________________________________________104a bday___________')
bbq.schueler_namen("104a",bbq.sort_bday)
console.log('_________________________________________104 abc ___________')

bbq.schueler_namen("104b",bbq.sort_abc)