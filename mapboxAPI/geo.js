//mapbox free до 50к переходов, один сеанс длится 12 часов, если сеанс через 12 часов не будет закрыт, то засчитывается новый сеанс.
// прайс-лист с оф.сайта  https://www.mapbox.com/pricing/#session-user-pricing

mapboxgl.accessToken =
	'Ваш_токен';
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/light-v10', //hosted style id
	center: [56.240510, 58.008673], // starting position
	zoom: 13,
	
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
	map.addSource('points', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [{
					// feature
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [
							56.189749,
							58.009333
						]
					},
					'properties': {
						'title': 'ПГУ',
						'icon': 'college',
						'description': '<strong>Пермский Государственный Университет</strong><p>Классический университет города Перми, один из национальных исследовательских университетов России. Первое высшее учебное заведение на Урале, открывшее двери для своих студентов. Один из учредителей Ассоциации классических университетов России.</p>'
					}
				},
				{

					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [56.240416, 58.008421]
					},
					'properties': {
						'title': 'ПНИПУ',
						'icon': 'college'
					}
				},
				{

					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [56.251549, 58.008599]
					},
					'properties': {
						'title': 'ПГГПУ',
						'icon': 'college'
					}
				},
				{

					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [56.248039, 58.016054]
					},
					'properties': {
						'title': 'ПГАТУ',
						'icon': 'college'
					}
				},
				{

					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [56.244131, 58.014555]
					},
					'properties': {
						'title': 'ПГМУ',
						'icon': 'college'
					}
				},
				{

					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [56.248523, 58.018768]
					},
					'properties': {
						'title': 'ПИЖТ',
						'icon': 'college'
					}
				}
			]
		}
	});
	map.addLayer({
		'id': 'points',
		'type': 'symbol',
		'source': 'points',
		'layout': {
			// get the icon name from the source's "icon" property
			// concatenate the name to get an icon from the style's sprite sheet
			'icon-image': ['concat', ['get', 'icon'], '-15'],
			// get the title name from the source's "title" property
			'text-field': ['get', 'title'],
			'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
			'text-offset': [0, 0.6],
			'text-anchor': 'top'
		}
	});
});
//map.setLayoutProperty('country-label', 'text-field', 'Russian'); //set lng криво переводит

//construction for make popup 

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});
map.on('mouseenter', 'points', function (e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';

	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
		coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}

	// Populate the popup and set its coordinates
	// based on the feature found.
	popup
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
});

map.on('mouseleave', 'points', function () {
	map.getCanvas().style.cursor = '';
	popup.remove();
});
