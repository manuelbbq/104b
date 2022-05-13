class Firma {
    static abteilungnen = []
}

class Abteilung {
    name;
    mitarbeiter;

    constructor(name, mitarbeiter) {
        this.name = name;
        this.mitarbeiter = mitarbeiter;
    }


    static html_abteilungen() {
        const body = document.getElementById("abteilungen");
        const select = document.createElement('select');
        select.addEventListener('change',auswahl)
        body.appendChild(select)
        for (const abteilung of Firma.abteilungnen) {
            const add_opt = document.createElement('option');
            add_opt.setAttribute('value',abteilung.name)
            add_opt.innerHTML = abteilung.name;
            select.appendChild(add_opt);
        }
        const add_opt = document.createElement('option');
        add_opt.setAttribute('value','show all')
        add_opt.innerHTML = 'show all';
        select.appendChild(add_opt);

    }
    static new_abteilung(name, mitarbeiter){
        Firma.abteilungnen.push(new Abteilung( name, mitarbeiter));
        document.getElementById('abteilungen').innerHTML=""
        Abteilung.html_abteilungen();
    }

}

Abteilung.new_abteilung('Verkauf', 22);
Abteilung.new_abteilung('Einkauf', 12);
Abteilung.new_abteilung('Marketing', 122);
Abteilung.new_abteilung('IT', 2);
const ab_name = document.getElementById('ab_name');
const ab_mit = document.getElementById('ab_mit');

document.getElementsByTagName('button')[0].addEventListener('click',()=>{button_click(ab_name.value,ab_mit.value)})

function button_click(ab_name, ab_mit){
    Abteilung.new_abteilung(ab_name, ab_mit)
    console.log(ab_name)
    console.log(ab_mit)
}
function auswahl (){
    console.log(this.value)
    document.getElementById('anzeige').innerHTML = ""
    for (const x of Firma.abteilungnen) {
        if(this.value === 'show all'){

            document.getElementById('anzeige').innerHTML += x.name +" Mitarbeiteranzahl: "+ x.mitarbeiter +"<br>"
        }
        if(x.name === this.value){
            document.getElementById('anzeige').innerHTML = x.name +" Mitarbeiteranzahl: "+ x.mitarbeiter
            return
        }
    }




}