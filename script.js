var map = L.map('map').setView([25.433165033426327, 81.83578023475101], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([25.433165033426327, 81.83578023475101]).addTo(map)
    .bindPopup('<br>my property location</br><br> mobile 9454687100')
    .openPopup();

// Main Road Marker
L.marker([25.433173551679122, 81.83577837574121]).addTo(map)
    .bindPopup('<br>Main Road</br><br> mobile 9454687100')
    .openPopup();

//property Marker
L.marker([25.431435428682114, 81.83834407306517]).addTo(map)
    .bindPopup('<br>my property location</br><br> mobile 9454687100')
    .openPopup();

//line between property and main road
L.polyline([
    [25.433173551679122, 81.83577837574121],
    [25.431435428682114, 81.83834407306517]
], { color: 'blue', weight: 5 }).addTo(map);

//Zoom to show both points
map.fitBounds([
    [25.433173551679122, 81.83577837574121],
    [25.431435428682114, 81.83834407306517]
]);