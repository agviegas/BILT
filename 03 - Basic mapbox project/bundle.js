mapboxgl.accessToken =
  "pk.eyJ1IjoiYWd2aWVnYXMiLCJhIjoiY2w4aGd0MTNuMDh2cjN3bnlsc2R2b2p6aCJ9.CBLemEPDigXCJ2ad-QKjHA";

new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  zoom: 20.5,
  center: [13.4453, 52.491],
  pitch: 75,
  bearing: -80,
  antialias: true,
});

const modelOrigin = [13.4453, 52.491];
const modelAltitude = 0;
const modelRotate = [Math.PI / 2, 0.72, 0];

const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
  modelOrigin,
  modelAltitude
);

({
  translateX: modelAsMercatorCoordinate.x,
  translateY: modelAsMercatorCoordinate.y,
  translateZ: modelAsMercatorCoordinate.z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
});
