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


const initialCoordinates = [40.4169473, -3.7057172]; // Plaza Sol en Madrid [lat, lng]

// Añadimos el marcador a nuestra posición inicial
L.marker(initialCoordinates).addTo(map);
 // Ejemplo añadiendo otras coordenadas:

const plazaMayorCoordinates = [34.028523673475156, -118.23009823662461]
L.marker(plazaMayorCoordinates).addTo(map);


/* 




var circle = L.circle([34.06223287851624, -118.2968521728518], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

var polygon = L.polygon([
    [38.273313683659296, -0.5411484349322833],
    [38.27315159046672, -0.5394966683113034],
    [38.272487004594424, -0.5398270216354993],
    [38.27282740299612, -0.5406735520287516],
    [38.27250321407831, -0.5397650803872126]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon."); */





// 2. Posicionar el transporte público (trenes y autobuses) de Los Angeles en el mapa. 🎉 🚌 🚊
// Tendrás que hacer:

// Fetch de la posición de los vehículos en tiempo real

//navigator.geolocation.getCurrentPosition(...)
/* 
async function trenesInfo(){
const resultado = await fetch(`https://api.metro.net/LACMTA_Rail/vehicle_positions/all?geojson=false`);
const datosTrenes = await resultado.json();
console.log(datosTrenes);
const tren = [];

for (let i = 0; i < datosTrenes.length; i++) {
    tren.push(datosTrenes[i].geometry.coordinates);
}

const mapTrenes = document.querySelector('#mapTrenes');
const mostrar = mapTrenes.innerHTML;



console.log(tren)



}
trenesInfo() 
 */
// Después de hacer fetch(), tratar el objeto para poder pintar los puntos con Leafelt