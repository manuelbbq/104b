class Schueler {
    sex;
    bday;
    fname;
    lname;
    static id_count = 1;

    constructor(sex, bday, fname, lname) {

        this.id = Schueler.id_count;
        this.sex = sex;
        this.bday = bday;
        this.fname = fname;
        this.lname = lname;
        Schueler.id_count++
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
    constructor(name) {
        this.name = name;
        this._klassen = [];
    }

    get klassen() {
        return this._klassen;
    }

    set klassen(value) {
        this._klassen.push(value);
    }
}

class Bildungstraeger {
    constructor(name) {
        this.name = name;
        this._schulen = [];
        this._klassen = [];
    }

    get schulen() {
        return this._schulen;
    }

    set schulen(value) {
        this._schulen.push(value);
    }

    get klassen() {

        for (const schulen of this.schulen) {
            for (const klassen of schulen._klassen) {
                this._klassen.push(klassen)
            }

        }
        return this._klassen
    }
    delete_schueler (array,pos){
        const gel_schueler = array.splice(pos,1)
        return gel_schueler[0]

    }

    change_schueler(obj,array){
        obj.fname = array[0];
        obj.lname = array[1];


    }
    change_klasse(id, atr, neu_klasse){
        let schueler = this.find_schueler_and_func(id, atr, this.delete_schueler)

    }

    find_klasse_and_func(name, func) {
        for (const wschulen of this.schulen) {
            for (const wklassen of wschulen._klassen) {
                for (let i = 0; i < wklassen._schueler.length; i++) {
                    if (wklassen._schueler[i][atr] === id) {
                        if(func !== undefined) {
                            return func(wklassen._schueler,i)
                        }
                        return wklassen._schueler[i];
                        // wklassen._schueler.splice(i, 1);
                    }
                }
            }
        }
    }



    find_schueler_and_func(id, atr, func) {
        for (const wschulen of this.schulen) {
            for (const wklassen of wschulen._klassen) {
                for (let i = 0; i < wklassen._schueler.length; i++) {
                    if (wklassen._schueler[i][atr] === id) {
                        if(func !== undefined) {
                            return func(wklassen._schueler,i)
                        }
                        return wklassen._schueler[i];
                        // wklassen._schueler.splice(i, 1);
                    }
                }
            }
        }
    }


    schuler_liste(wschule = undefined, wklasse = undefined) {

        this.bildarray = [];
        for (const schule of this.schulen) {
            if (wschule !== undefined) {
                if (!wschule.includes(schule.name)) {
                    continue
                }
            }
            for (const klasse of schule._klassen) {
                if (wklasse !== undefined) {
                    if (!wklasse.includes(klasse.name)) {
                        continue
                    }
                }

                for (const schueler of klasse._schueler) {
                    this.bildarray.push({
                        id: schueler.id,
                        sname: schule.name,
                        kname: klasse.name,
                        fname: schueler.fname,
                        lname: schueler.lname,
                        bday: schueler.bday
                    })

                }
            }
        }
        return this.bildarray
    }

    sort_abc(array, num) {
        array.sort(function (a, b) {
            if (a[num] > b[num]) {
                return 1
            } else if (a[num] < [num]) {
                return -1
            } else {
                return 0
            }
        })
    }

    sort_bday(array) {
        array.sort(function (a, b) {
            if (new Date(a.bday) < new Date(b.bday)) {
                return 1
            } else if (new Date(a.bday) > new Date(b.bday)) {
                return -1
            } else {
                return 0
            }
        })
    }

    html_table(wschule = undefined, wklasse = undefined, sort = this.sort_abc, num = "lname") {
        let array = this.schuler_liste(wschule, wklasse);
        sort(array, num)

        for (const schuler of array) {
            let tbody = document.getElementById('daten');
            let add_tr = document.createElement('tr');
            tbody.appendChild(add_tr);
            for (const x in schuler) {
                let td_schule_name = document.createElement('td');
                td_schule_name.innerHTML = schuler[x];
                add_tr.appendChild(td_schule_name)
            }
            let add_buttun = document.createElement('button');
            add_buttun.addEventListener("click", delete_but);
            add_buttun.innerHTML = "löschen";
            add_tr.appendChild(add_buttun)
        }
    }

    html_auswahl(array, id, klasse, func) {
        // let array = this.schulen;
        for (const schule of array) {
            // console.log(schule.name);
            let div_ele = document.getElementById(id);
            let add_input = document.createElement('input');
            add_input.setAttribute('type', 'checkbox');
            add_input.setAttribute('name', 'schule');
            add_input.setAttribute('value', schule.name);
            add_input.setAttribute('id', schule.name);
            add_input.setAttribute('checked', "");
            add_input.setAttribute('class', klasse);
            add_input.addEventListener('change', func);
            let add_label = document.createElement('label');
            add_label.setAttribute('for', schule.name)
            add_label.innerHTML = schule.name;
            div_ele.appendChild(add_input);
            div_ele.appendChild(add_label);
            div_ele.appendChild(document.createElement('br'))
        }
    }
}

const klasse1 = new Klasse("104a");
klasse1.schueler = new Schueler('m', '08.15.2001', 'ZAlf', 'Alfonson');
klasse1.schueler = new Schueler('m', '11.20.1999', 'Bernd', 'Berndson');
klasse1.schueler = new Schueler('w', '02.02.2002', 'Carla', 'Carlason');

const klasse2 = new Klasse("104b");
klasse2.schueler = new Schueler('m', '12.08.1980', 'XDieter', 'Dieterson');
klasse2.schueler = new Schueler('w', '07.30.2010', 'Emma', 'Emmason');
klasse2.schueler = new Schueler('w', '12.12.2012', 'Frieda', 'Friedason');

const klasse3 = new Klasse('104c');
klasse3.schueler = new Schueler('w', '01.01.2000', 'Giesela', 'Giedelason')
klasse3.schueler = new Schueler('m', '01.02.2002', 'Heinz', 'Heinzson')

const s1 = new Schule('BBQ Berlin');
s1.klassen = klasse1;
s1.klassen = klasse2;

const s2 = new Schule('BBQ Hamburg');
s2.klassen = klasse3;

const bildungst = new Bildungstraeger('BBQ')
bildungst.schulen = s1;
bildungst.schulen = s2;
// bildungst.schulen = new Schule('Party time');

bildungst.html_table();
bildungst.html_auswahl(bildungst.schulen, "schulen", 'schulen_check', change_check)
bildungst.html_auswahl(bildungst.klassen, "klassen", 'klassen_check', change_klassenbox)

function check_checkbox(checkboxes) {
    let aus_array = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            aus_array.push(checkbox.value)
        }
    }
    return aus_array
}

function change_check() {
    let aus_array = check_checkbox(document.getElementsByClassName('schulen_check'))
    remove_ele_cilds(document.getElementById('daten'));
    bildungst.html_table(aus_array)
    const auswahl = [];
    for (const schule of bildungst.schulen) {
        if (aus_array.includes(schule.name)) {
            for (const klassenElement of schule._klassen) {
                auswahl.push(klassenElement)
            }

        }
    }
    remove_ele_cilds(document.getElementById("klassen"))
    bildungst.html_auswahl(auswahl, "klassen", 'klassen_check', change_klassenbox)
}

function change_klassenbox() {
    let wschulen = check_checkbox(document.getElementsByClassName('schulen_check'));
    let wklassen = check_checkbox(document.getElementsByClassName('klassen_check'));
    remove_ele_cilds(document.getElementById('daten'));
    bildungst.html_table(wschulen, wklassen);

}

function remove_ele_cilds(div_child) {
    while (div_child.childElementCount > 0) {
        div_child.firstChild.remove();
    }


}

function delete_but() {
    let id = parseInt(this.parentElement.firstChild.innerHTML)
    bildungst.find_schueler_and_func(id,'id',bildungst.delete_schueler)
    remove_ele_cilds(document.getElementById('daten'))
    bildungst.html_table(check_checkbox(document.getElementsByClassName('schulen_check')), check_checkbox(document.getElementsByClassName('klassen_check')));
}
function loeschen() {
    this.parentElement.remove()

}