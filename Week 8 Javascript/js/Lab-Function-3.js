var naam;
var getal;

while(naam !="stop"){
	naam = prompt("Vul je naam in")
		if (naam != "stop") {
			getal = prompt("Vul tot slot je leeftijd in")
			vraag(naam, getal);

	}
}
function vraag(naam, getal) {
	document.write("Hallo " + naam + ", je leeftijd is " + getal + "<br>")
}



