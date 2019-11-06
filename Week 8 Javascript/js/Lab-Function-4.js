var vraag = prompt ("Hoeveel tafels wil je zien");

function tafel(vraag) {
	document.write(vraag + " x 1 = " + vraag*1 + "<br>")
	document.write(vraag + " x 2 = " + vraag*2 + "<br>")
	document.write(vraag + " x 3 = " + vraag*3 + "<br>")
	document.write(vraag + " x 4 = " + vraag*4 + "<br>")
	document.write(vraag + " x 5 = " + vraag*5 + "<br>")
	document.write(vraag + " x 6 = " + vraag*6 + "<br>")
	document.write(vraag + " x 7 = " + vraag*7 + "<br>")
	document.write(vraag + " x 8 = " + vraag*8 + "<br>")
	document.write(vraag + " x 9 = " + vraag*9 + "<br>")
	document.write(vraag + " x 10 = " + vraag*10 + "<br><br><br>")

} for( var i = 1; i<=vraag; i++) {
	tafel(i)
}