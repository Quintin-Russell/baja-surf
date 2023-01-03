import "@googlemaps/js-api-loader"
import makeInfoWindow from "./makeInfoWindow"

// const makeMarker = (map: google.maps.Map | null, marker: Marker) => {
//   if (!map) throw new Error("no map")
//   const { position, title, description } = marker
//   const markerObj = new google.maps.Marker({
//     position,
//     map,
//     title,
//   })
//   const markerInfoWindow = makeInfoWindow(description, title)

//   markerObj.addListener("click", () => {
//     markerInfoWindow.open({
//       anchor: markerObj,
//       map
//     })
//   })

//   return markerObj
// }

// export default makeMarker
