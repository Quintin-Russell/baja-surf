import { onUnmounted, onMounted, ref } from "vue";

const getLatLong = (
  position: GeolocationPosition,
  coords: GeoLocation["coords"]
) => {
  coords.value = position.coords;
};

const useGeolocation = (): GeoLocation => {
  const coords = ref({ latitude: 0, longitude: 0 });
  const isSupported = "navigator" in window && "geolocation" in navigator;
  let watcher = null;
  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition((position) =>
        getLatLong(position, coords)
      );
  });
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });

  return { coords, isSupported };
};

export default useGeolocation;
