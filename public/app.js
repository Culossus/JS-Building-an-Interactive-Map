// create map
var map = L.map("map").setView([51.505, -0.09], 13);

// add openstreetmap tiles

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// create and main add geolocation marker

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
  .setLatLng([51.513, -0.09])
  .setContent("I am a standalone popup.")
  .openOn(map);

// Create and add a geolocation marker:

marker.bindPopup("<p1><b>The Hoxton, Paris</b></p1>").openPopup();

// draw the 2nd arrondissement

[48.863368120198004, 2.3509079846928516][
  (48.86933262048345, 2.3542531602919805)
][(48.87199261164275, 2.3400569901592183)][
  (48.86993336274516, 2.3280142476578813)
][(48.86834104280146, 2.330308418109664)];

// create red pin marker

// metro station markers

const rS = L.marker([48.866200610611926, 2.352236247419453]).bindPopup(
  "RÃ©aumur-SÃ©bastopol"
);
const sSD = L.marker([48.869531786321566, 2.3528590208055196]).bindPopup(
  "Strasbourg-Saint-Denis"
);
const sentier = L.marker([48.8673721067762, 2.347107922912739]).bindPopup(
  "Sentier"
);
const bourse = L.marker([48.86868503971672, 2.3412285142058167]).bindPopup(
  "Bourse"
);
const qS = L.marker([48.869560129483226, 2.3358638645569543]).bindPopup(
  "Quatre Septembre"
);
const gB = L.marker([48.871282159004856, 2.3434818588892714]).bindPopup(
  "Grands Boulevards"
);

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap);

const lB = L.marker([48.866200610611926, 2.352236247419453], {
  icon: redPin,
}).bindPopup("RÃ©aumur-SÃ©bastopol");
