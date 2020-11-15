mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcnNobTA3IiwiYSI6ImNraGlncXoyMTBxaG4ycnA2cTV1cHF6NGQifQ.ecueb48RYWcspZxbveRZeA';

// Get current position
navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true})

function success(position) {
    console.log(position);
    findLocation([position.coords.longitude, position.coords.latitude])
}

function error(err) {
    console.log(err);
    findLocation([75.493401, 11.753000])
}

function findLocation(thisLocation) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: thisLocation,
        zoom: 16
      });

      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}