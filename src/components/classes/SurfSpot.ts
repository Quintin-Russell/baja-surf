import "@googlemaps/js-api-loader"
import makeInfoWindow from "@/helpers/makeInfoWindow"

class SurfSpot {
  position: { lat: number; lng: number }
  title: string
  description: Marker["description"]
  map: google.maps.Map

  constructor(
    lat: number,
    lng: number,
    title: string,
    description: Marker["description"],
    map: google.maps.Map
  ) {
    ;(this.position = { lat, lng }),
      (this.title = title),
      (this.description = description)
    this.map = map
  }

  putMarkerOnMap() {
    if (!this.map) throw new Error("no map")
    const { position, map, title, description } = this
    const markerObj = new google.maps.Marker({
      position,
      map,
      title,
    })
    const markerInfoWindow = makeInfoWindow(title, description)

    markerObj.addListener("click", () => {
      markerInfoWindow.open({
        anchor: markerObj,
        map,
      })
    })
  }
}

export default SurfSpot
