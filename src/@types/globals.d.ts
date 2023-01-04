import { LabelHTMLAttributes } from "vue"

declare global {
  type CoordsObj = { lattitude: number; longitude: number }
  interface GeoLocation {
    coords: Ref<CoordsObj>
    isSupported: boolean
  }
  interface Marker {
    lat: number
    lng: number
    title: string
    description: {
      waveType: string
      waveQuality: number
      waveSpeed: string
      bottom: string
      text: string
    }
  }
  interface SurfSpotConstructor extends Marker {
    map: google.maps.Map
  }
  interface RegionDataConstructor {
    name: string
    northBoundaryLat: number
    southBoundaryLat: number
    description: string
  }
}

export {}
