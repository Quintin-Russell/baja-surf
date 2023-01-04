import "@googlemaps/js-api-loader"
import makeInfoWindow from "@/helpers/makeInfoWindow"

class SurfSpot {
  position: { lat: number; lng: number }
  title: string
  description: Marker["description"]
  map: google.maps.Map

  constructor(input: SurfSpotConstructor) {
    ;(this.position = { lat: input.lat, lng: input.lng }),
      (this.title = input.title),
      (this.description = input.description)
    this.map = input.map
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
