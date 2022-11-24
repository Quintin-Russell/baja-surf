<template>
  <div>
    <h1></h1>
    <div ref="mapDiv"></div>
  </div>
</template>

<script lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { onMounted, ref } from 'vue'
const GOOGLE_MAP_API_KEY = 'AIzaSyC9fgIeNyg1EfSqwkuwzL--2lmYhIQE8_Y'
//video: https://www.youtube.com/watch?v=m4ad3eEFhAo

export default {
    setup() {
        const loader = new Loader({ apiKey: GOOGLE_MAP_API_KEY })
        const mapDiv = ref(null)
        onMounted(async () => {
            loader.load()
            new google.maps.Map(mapDiv.value, {
              zoom: 7
            })
        })
        return { mapDiv }
    }
}
</script>

<style>

</style>