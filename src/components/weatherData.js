const options = {
  enableHighAccuracy: true,
  timeout: 3000,
  maximumAge: 0,
};

let latitude = null;
let longitude = null;
let error = null;

function success(pos) {
  var crd = pos.coords;
  const lat = crd.latitude.toString();
  const long = crd.longitude.toString();
  latitude = lat;
  longitude = long;
  error = null;
}

function errorHandel(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  latitude = null;
  longitude = null;
  error = err.message;
}

navigator.geolocation.getCurrentPosition(success, errorHandel, options);
console.log(latitude, longitude);
export { latitude, longitude, error };
