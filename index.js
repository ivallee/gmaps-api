function initMap() {
  const vancouver = { lat: 49.2699, lng: -123.124 }
  const map = new google.maps.Map(document.getElementById('map'), {
    center: vancouver,
    zoom: 10
  });
  const marker = new google.maps.Marker({
    position: vancouver,
    map: map
  });
}