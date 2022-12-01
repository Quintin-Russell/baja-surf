declare global {
  type CoordsObj = { lattitude: number; longitude: number };
  interface GeoLocation {
    coords: Ref<CoordsObj>;
    isSupported: boolean;
  }
}

export {};
