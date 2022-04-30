console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Submitted Succesfully")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let orangeCat = document.getElementById('orangeCat')

function compliment(evt) {
	window.alert("You are good")
}

orangeCat.addEventListener('mouseover', compliment)