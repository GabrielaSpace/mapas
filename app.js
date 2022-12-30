// 1. Utiliza Leaflet para posicionarte en un mapa
// Habrá que utilizar navigator.geolocation.getCurrentPosition(...)

var map = L.map('map').setView([34.06223287851624, -118.2968521728518], 13);
//Mapa de valdosas
const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
// Este token será el que obtengamos en la web de Mapbox; Es el acceso a la API de pago.
const ACCESS_TOKEN = 'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';
  //Libreria para ver el mapa tal y como lo conocemos.
const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);

//Ponerle el pin/marcador al mapa 
 var marker = L.marker([34.06223287851624, -118.2968521728518]).addTo(map);

//la siguiente función de Leaflet para cargar todos los tiles de Mapbox en nuestro mapa:
 L.tileLayer(MAPBOX_API, {
  attribution: ATTRIBUTION,
  maxZoom: 18,
  id: 'mapbox/navigation-night-v1',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: ACCESS_TOKEN
}).addTo(map);


const KoreaTown = [34.06223287851624, -118.2968521728518]; //koreaTown

const initialCoordinates = [40.4169473, -3.7057172]; // Plaza Sol en Madrid [lat, lng]

// Añadimos el marcador a nuestra posición inicial
L.marker(initialCoordinates).addTo(map);
 // Ejemplo añadiendo otras coordenadas:

const plazaMayorCoordinates = [34.028523673475156, -118.23009823662461] //
L.marker(plazaMayorCoordinates).addTo(map);

// Añadir un popUp
// Añadimos el marcador a nuestra posición inicial
L.marker(initialCoordinates).bindPopup("<b>Plaza Sol</b><br>Posición inicial del mapa").addTo(map);
// Ejemplo añadiendo otras coordenadas:
L.marker(plazaMayorCoordinates).bindPopup("<b>Autovia</b><br>Posición adicional").addTo(map);// linea 37 de codigo

L.marker(KoreaTown).bindPopup("<b>KoreaTown</b><br>ser'a esta??").addTo(map);


//1. Utiliza Leaflet para posicionarte en un mapa
//Habrá que utilizar navigator.geolocation.getCurrentPosition(...)
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    const obtenerLocalizacionActual = navigator.geolocation.getCurrentPosition(showPosition);

    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  let marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
  marker.bindPopup(`Tu estás actualmente en  ${position.coords.latitude}, ${position.coords.longitude}`);

}


// 2. Posicionar el transporte público (trenes y autobuses) de Los Angeles en el mapa. 🎉 🚌 🚊
// Tendrás que hacer:

// Fetch de la posición de los vehículos en tiempo real

//navigator.geolocation.getCurrentPosition(...)



// Habrá que utilizar navigator.geolocation.getCurrentPosition(...)

 const mapTrenes = L.map('mapTrenes').setView([34.06223287851624, -118.2968521728518], 13);

const mapBuses = L.map('mapBuses').setView([34.06223287851624, -118.2968521728518], 13);

async function trenesInfo(){
  const resultado = await fetch(`https://api.metro.net/LACMTA_Rail/vehicle_positions/all?geojson=false`);
  const datosTrenes = await resultado.json();
  console.log(datosTrenes);
  const tren = [];
  for (let i = 0; i < datosTrenes.length; i++) {
    let marker = L.marker([tren.position.latitude, tren.position.longitude]).addTo(mapTrenes);
      tren.push(datosTrenes[i].geometry.coordinates);
      L.marker(tren).addTo(mapTrenes)
      tren.push(marker)
  }}



