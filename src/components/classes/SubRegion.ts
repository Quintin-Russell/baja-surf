import surfSpots from "@/data/surfSpots"

class SubRegion {
  name: string
  northBoundaryLat: number
  southBoundaryLat: number
  surfSpots: Marker[]

  constructor(subRegionDataConstructor: RegionDataConstructor) {
    this.name = subRegionDataConstructor.name
    this.northBoundaryLat = subRegionDataConstructor.northBoundaryLat
    this.southBoundaryLat = subRegionDataConstructor.southBoundaryLat
    this.surfSpots = this.assignSurfSpotsToRegion()
  }

  assignSurfSpotsToRegion() {
    return surfSpots.filter(
      (spot) =>
        this.northBoundaryLat >= spot.lat || spot.lat >= this.southBoundaryLat
    )
  }
}

export default SubRegion
