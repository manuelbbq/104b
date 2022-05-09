

/

// let but_1 = document.getElementById("aufgabe1");
// but_1.addEventListener('click',aufgabe_1);
// but_1.addEventListener('click',show_aufgabe_2);

//
//     The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//
//     You can add many event handlers to one element.
//
//     You can add many event handlers of the same type to one element, i.e two "click" events.


function aufgabe_1(){
    const add_div = document.createElement('div');
    add_div.innerHTML = "Ich habe jetzt eine Aufgabe";
    document.body.appendChild(add_div);
}
function aufgabe_2(){
    const gib_mir_Arbeit = document.getElementById('animate');
    gib_mir_Arbeit.addEventListener('mouseover',arbeit);
    gib_mir_Arbeit.addEventListener('mouseout', ich_bin_weg);
    gib_mir_Arbeit.addEventListener('mouseout', show_aufgabe_3);

}
function arbeit() {
    console.log('ich arbeite jetzt')

}
function ich_bin_weg() {
    this.style.display = 'none'
}

function show_aufgabe_2() {
    document.getElementById("animate").style.display = 'block';
    document.getElementById("aufgabe2").style.display = 'block';
    document.getElementById("aufgabe2").addEventListener('click', aufgabe_2);

}
function show_aufgabe_3() {
    document.getElementById('aufgabe3').style.display = 'block';
    document.getElementById('aufgabe3').addEventListener('click', ich_nerve);
}
