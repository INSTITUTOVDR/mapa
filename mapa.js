// URL de la API de IP2Location
var apiUrl = 'https://api.ip2location.io/?key=1494903A6304848D45C8E8FB0E1F4236&ip=190.120.110.188';

// Inicializar el mapa
var map = L.map('map').setView([0, 0], 2);

// Capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Realizar la petición a la API de IP2Location
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Obtener latitud y longitud de la respuesta
        var latitude = data.latitude;
        var longitude = data.longitude;

        // Añadir marcador al mapa
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Ubicación IP: ' + latitude + ', ' + longitude)
            .openPopup();

        // Centrar el mapa en la ubicación
        map.setView([latitude, longitude], 10);
    })
    .catch(error => {
        console.error('Error al obtener la ubicación:', error);
    });