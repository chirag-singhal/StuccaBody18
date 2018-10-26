window.addEventListener("keyup",key);
function key(e) {
		var x = e.key;
		if(x =="ArrowRight"){next();}
		else if (x =="ArrowLeft") {previous();}
		else if( Number(x) >= 1 && Number(x) <= noOfImages){
			keyMap(Number(x))
		}
	console.log(e);
}
