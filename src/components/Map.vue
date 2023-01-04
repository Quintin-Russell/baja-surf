<template>
  <div class="mapContainer" ref="mapDiv"></div>
</template>

<script lang="ts">
import { Loader } from "@googlemaps/js-api-loader"
import { onMounted, ref } from "vue"
import surfSpots from "../data/surfSpots"
import SurfSpot from "./classes/SurfSpot"
// import makeMarker from "../helpers/makeMarker"

//video: https://www.youtube.com/watch?v=m4ad3eEFhAo

export default {
  setup() {
    const apiKey: string = process.env.VUE_APP_GOOGLE_MAP_API_KEY
    const loader = new Loader({ apiKey })
    const mapDiv = ref<HTMLElement | null>(null)
    let map: google.maps.Map | null = null
    onMounted(async () => {
      await loader.load()
      if (mapDiv.value) {
        map = new google.maps.Map(mapDiv.value, {
          center: { lat: 27.8, lng: -113 },
          zoom: 5.5,
        })
        surfSpots.forEach((spot) => {
          if (!map) return
          const newSpot = new SurfSpot({ ...spot, map })
          newSpot.putMarkerOnMap()
        })
      }
    })
    return { mapDiv }
  },
}
</script>

<style>
b,
h4 {
  font-family: "Yatra One", cursive;
}

.infoWindowTitle {
  font-family: "Ultra", serif;
}

.mapContainer {
  width: 80%;
  height: 90vh;
  margin: auto;
}
</style>
