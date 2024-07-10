function iniciarMap() {
  // Obtener la ubicación actual del usuario
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var coord = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };

          // Crear mapa centrado en la ubicación actual
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: coord
          });

          // Colocar un marcador en la ubicación actual
          var marker = new google.maps.Marker({
              position: coord,
              map: map,
              title: '¡Estás aquí!'
          });
      }, function() {
          // Manejar errores de geolocalización
          handleLocationError(true);
      });
  } else {
      // El navegador no soporta geolocalización
      handleLocationError(false);
  }
}

function handleLocationError(browserHasGeolocation) {
  var errorMessage = browserHasGeolocation ?
      'Error: Habilite la ubicacion..' :
      'Error: Habilite la ubicacion..';
  alert(errorMessage);
}
