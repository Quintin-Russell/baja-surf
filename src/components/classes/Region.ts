import subRegions from "@/data/subRegions"

class Region {
  name: string
  northBoundaryLat: number
  southBoundaryLat: number
  subRegionsInRegion: RegionDataConstructor[]
  description: string

  constructor(regionDataConstructor: RegionDataConstructor) {
    // constructor(name: string, northBoundaryLat: number, southBoundaryLat: number, description: string) {
    this.name = regionDataConstructor.name
    this.northBoundaryLat = regionDataConstructor.northBoundaryLat
    this.southBoundaryLat = regionDataConstructor.southBoundaryLat
    this.description = regionDataConstructor.description
    this.subRegionsInRegion = this.assignSubRegionsToRegion()
  }

  assignSubRegionsToRegion() {
    return subRegions.filter(
      (subRegion) =>
        this.northBoundaryLat >= subRegion.northBoundaryLat ||
        subRegion.southBoundaryLat >= this.southBoundaryLat
    )
  }
}

export default Region
