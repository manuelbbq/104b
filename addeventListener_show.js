document.getElementById('aufgabe1').addEventListener('click',arbeit)
document.getElementById('aufgabe1').addEventListener('click',show_aufgabe_2)
document.getElementById('aufgabe2').addEventListener('click',aufgabe_2);
document.getElementById('aufgabe3').addEventListener("click",entfernen)
document.getElementById('aufgabe3').addEventListener('click',ich_nerve)

console.log(this)
function aufgabe_2(){
    const gib_mir_Arbeit = document.getElementById('animate');
    gib_mir_Arbeit.addEventListener('mouseover',arbeitsvermittlung);
    gib_mir_Arbeit.addEventListener('mouseout', ich_bin_weg)
    gib_mir_Arbeit.addEventListener('mouseout', show_aufgabe_3);
    document.getElementById('aufgabe3').addEventListener('click',ich_nerve)

}
function ich_nerve() {
    alert('nerv nerv');
}



function entfernen(){
    this.removeEventListener('click',ich_nerve)
}
























function arbeit(){
    const add_div = document.createElement('div');
    add_div.innerHTML = "Ich habe jetzt eine Aufgabe";
    document.getElementById('leer').appendChild(add_div);
}




function show_aufgabe_2() {
    document.getElementById("animate").style.display = 'block';
    document.getElementById("aufgabe2").style.display = 'block';
    document.getElementById("linktoevent").style.display= 'block';


}
function show_aufgabe_3() {
    document.getElementById('aufgabe3').style.display = 'block';


}

function arbeitsvermittlung() {
    console.log('ich arbeite jetzt')

}
function ich_bin_weg() {
    this.style.display = 'none'
}






