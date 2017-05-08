function flash(id, kolor, czas, kolor2, czas2) {
    document.getElementById(id).style.color = kolor;
    setTimeout('flash("' + id + '","' + kolor2 + '",' + czas2 + ',"' + kolor + '",' + czas + ')', czas);
}


function wypisywanieResztyZawodnikow() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Kiko Casilla, Pepe, Nacho, Danilo, Alvaro Arbeloa, Casemiro, Mateo Kovacic, Lucas Vazquez, Denis Czeryszew, Isco, Jese");
    node.appendChild(textnode);
    document.getElementById("resztaZaw").appendChild(node);

}