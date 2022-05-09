document.getElementById('for').addEventListener('click', change);
document.getElementById('back').addEventListener('click', change_back);

const bildarry = ["bild1.jpg", "bild2.jpg", "bild3.jpg"];
function change() {
    document.getElementsByTagName("img")[0].src = "bilder/"+bildarry[1];
    bildarry.push(bildarry[0]);
    bildarry.shift();
}
function change_back() {
    document.getElementsByTagName("img")[0].src = "bilder/"+bildarry[bildarry.length-1];
    bildarry.unshift(bildarry[bildarry.length-1]);
    bildarry.pop();
}

