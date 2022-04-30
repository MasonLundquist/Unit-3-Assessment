let color = document.getElementById('color')

function colorClicked(evt) {
	window.alert("Orange")
}

color.addEventListener('click', colorClicked)

let place = document.getElementById('place')

function placeClicked(evt) {
	window.alert("Home")
}

place.addEventListener('click', placeClicked)

let ritual = document.getElementById('ritual')

function ritualClicked(evt) {
	window.alert("Lasagna for birthday dinner")
}

ritual.addEventListener('click', ritualClicked)