
var mymap = L.map('mapid', {
	'center': [58.008673, 56.240510],
	'zoom': 13,
	'zoomControl': false,
	'doubleClickZoom': false,
	'dragging': false, //Whether the map be draggable with mouse/touch or not.
	'worldCopyJump': true

});

//make tile from OSM
var attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var tiles = L.tileLayer(tileUrl, {
	attribution
});
tiles.addTo(mymap);

//add icons for markers
var pguIcon = L.icon({
	iconUrl: '../examples/psu.png',
	iconSize: [60, 60],
	iconAnchor: [30, 40],
	popupAnchor: [5, -50]

})


//add markers for Perm (NEED CONFIG)
L.marker([58.009333, 56.189749], {
	'title': 'ПГУ',
	icon: pguIcon
}).addTo(mymap).bindPopup().setPopupContent('<p>PGU<p>');

L.marker([58.008421, 56.240416], {
	'title': 'ПНИПУ',
	//Later can add a custom marker
}).addTo(mymap).bindTooltip('PNIPU');

L.marker([58.008599, 56.251549], {
	'title': 'ПГГПУ',
	//Later can add a custom marker
}).addTo(mymap).bindPopup('ПГГПУ');

L.marker([58.016054, 56.248039], {
	'title': 'ПГАТУ',
	//Later can add a custom marker
}).addTo(mymap).bindPopup('ПГАТУ');

L.marker([58.014555, 56.244131], {
	'title': 'ПГМУ',
	//Later can add a custom marker
}).addTo(mymap).bindPopup('ПГМУ');


//


//функция перехода //need config 
function rotate_to_Perm(button) {
	alert('Вы действительно хотите перейти?')
	mymap.flyTo([58.008673, 56.240510])
 //придумать условную конструкцию на проверку зональности
}
function rotate_to_Moscow(button) {
	alert('Вы действительно хотите перейти?')
	mymap.flyTo([55.752121, 37.617664])
}
function rotate_to_Novosibirsk(button) {
	alert('Вы действительно хотите перейти?')
	mymap.flyTo([55.0415, 82.9346])
}
function rotate_to_SaintP(button){
	alert('Вы действительно хотите перейти?')
	mymap.flyTo([59.937500, 30.308611])
}