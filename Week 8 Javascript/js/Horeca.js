var bestelling= 0;//De bestelling

var frisp = 1;//"P" achter fris/bier/wijn geeft prijs aan
var bierp = 100;
var wijnp = 200;

var frisa = 0;//"A" achter fris/bier wijn geeft aantal aan
var biera = 0;
var wijna = 0;

var friso = 0;//"O" achter fris/bier/wijn geeft optelling aan
var biero = 0;
var wijno = 0;

var snackp = 0.5;//"P" achter snack geeft prijs aan
var snacka = 0;//"A" achter snack geeft aantal aan
var snacko = 0;//"O" achter snack geeft optelling aan
var snackss

while(bestelling!="stop") {
	bestelling = prompt("Wat wil je bestellen?")
	bestelling = bestelling.toLowerCase();
		if (bestelling =="fris") {
			frisa = prompt("Hoevel fris wil je hebben?")
			friso = friso + parseInt(frisa)
		}
		else if (bestelling =="bier") {
			biera = prompt("Hoeveel biertjes wil je hebben?")
			biero = biero + parseInt(biera)
		}
		else if (bestelling =="wijn") {
			wijna = prompt("Hoeveel wijntjes wil je hebben?")
			wijno = wijno + parseInt(wijna)
		}
		if (bestelling =="snack" || bestelling =="snacks") {
			snacka = prompt("Hoeveel bitterballen wil je hebben? (Alleen keuzen uit 8 of 16)")
			if (snacka =="8" || snacka =="16") {
				snackss = prompt("Hoeveel schalen van " + snacka + " wil je hebben?")
			snacko = snacko + parseInt(snacka) * parseInt(snackss)
		} else {
			alert("Je kunt alleen kiezen uit 8 of 16 bitterballen, je bestelling is niet toegevoegd")
		}
	}
			
}		

function prijs() {
	var frispa = parseInt(frisp * friso)//"PA" achter fris/bier/wijn/snack geeft prijs van het aantal aan
	var bierpa = parseInt(bierp * biero)
	var wijnpa = parseInt(wijnp * wijno)
	var snackpa = parseInt(snackp * snacko)
	
	var totaal = frispa + bierpa + wijnpa + snackpa;//rekent alles bij elkaar op
	if (friso >0){
	document.write("Prijs fris = &euro; " + frispa + "<br>");
	}
	if (biero >0){
	document.write("Prijs bier = &euro; " + bierpa + "<br>");
	}
	if (wijno >0){
	document.write("Prijs wijn = &euro; " + wijnpa + "<br>");
	}
	if (snacko =="8" || snacko =="16"){
		document.write("Prijs voor " + snackss + " schalen bitterballen = &euro; " + snackpa + "<br>")
	}
	document.write("De totale bedrag = &euro; " + totaal)
}


if (bestelling =="stop") {
	prijs();
}




