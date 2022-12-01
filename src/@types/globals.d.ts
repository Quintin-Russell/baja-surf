declare global {
  type CoordsObj = { lattitude: number; longitude: number }
  interface GeoLocation {
    coords: Ref<CoordsObj>
    isSupported: boolean
  }
  interface Marker {
    position: LatLng
    title: string
  }
}

export {}
