function submitForm1(){
	var chosenPreference = $('input[name=prefer]:checked', '#form-1').val();
	localStorage.setItem("form-1-preference", chosenPreference);
	
	document.getElementById("form-1-container").style.display = 'none';
	document.getElementById("form-2-container").style.display = 'block';
	document.getElementById("form-3-container").style.display = 'none';
	document.getElementById("form-4-container").style.display = 'none';
} 

function submitForm2(){
	var chosenStatus = $('input[name=status]:checked', '#form-2').val();
	localStorage.setItem("form-2-status", chosenStatus);

	document.getElementById("form-2-container").style.display = 'none';
	document.getElementById("form-1-container").style.display = 'none';
	document.getElementById("form-3-container").style.display = 'block';
	document.getElementById("form-4-container").style.display = 'none';
}

function submitForm3(){
	var chosenPlace = $('input[name=place]:checked', '#form-3').val();
	localStorage.setItem("form-3-place", chosenPlace);

	document.getElementById("form-3-container").style.display = 'none';
	document.getElementById("form-1-container").style.display = 'none';
	document.getElementById("form-2-container").style.display = 'none';
	document.getElementById("form-4-container").style.display = 'block';
}

function submitForm4(){
	var chosenIngrediants = $('input[name=ingrediants]:checked', '#form-4').val();
	localStorage.setItem("form-4-ingrediants", chosenIngrediants);

	document.getElementById("form-4-container").style.display = 'none';
	document.getElementById("form-1-container").style.display = 'none';
	document.getElementById("form-2-container").style.display = 'none';
	document.getElementById("form-3-container").style.display = 'none';
alert('almost done');
} 

function submitAll() {
	// vars for simple, inter, and adv
	var simple = 0, inter = 0, adv = 0;
	// array for checked from local storage
	var allChosen = [localStorage.getItem("form-1-preference"), localStorage.getItem("form-2-status"), localStorage.getItem("form-3-place"), localStorage.getItem("form-4-ingrediants")];
	// loop going through array to count how many of each var in the array
	for (var i = 0, length = allChosen.length; i < length; i++) {
		if (allChosen[i] === "Simple") {
			simple++;
		} else if (allChosen[i] === "Inter") {
			inter++;
		} else {
			adv++;
		}
	}

	
	// check to see which var has the most
	if (simple > inter && simple > adv) {
		//returns jquery to route them to make ramen
		alert("Simple");
	} else if (inter > simple && inter > adv) {
		// returns jquery to route them to make soup
		alert("Inter");
	} else {
		// returns jquery to route them yelp
		alert("Adv");
	}
	/**/
	
}