import "@googlemaps/js-api-loader"

const makeMarker = (map: google.maps.Map | null, marker: Marker) => {
  if (!map) throw new Error("no map")
  const { position, title } = marker
  return new google.maps.Marker({
    position,
    map,
    title,
  })
}

export default makeMarker
