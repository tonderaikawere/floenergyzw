export interface StationMapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

export const STATION_MAPS: Record<string, StationMapLocation> = {
  donnybrook: {
    id: 'donnybrook',
    name: 'Donnybrook Service Station (Harare)',
    lat: -17.8252,
    lng: 31.1345,
    googleMapsUrl: 'https://maps.google.com/?q=Donnybrook+Service+Station+Harare+Zimbabwe',
  },
  burnside: {
    id: 'burnside',
    name: 'Burnside Service Station (Bulawayo)',
    lat: -20.1983,
    lng: 28.5942,
    googleMapsUrl: 'https://maps.google.com/?q=Burnside+Service+Station+Bulawayo+Zimbabwe',
  },
  ironbridge: {
    id: 'ironbridge',
    name: 'Ironbridge Station (Bulawayo)',
    lat: -20.2105,
    lng: 28.6120,
    googleMapsUrl: 'https://maps.google.com/?q=Ironbridge+Station+Bulawayo+Zimbabwe',
  },
};

export const getStationMapUrl = (stationId: string): string => {
  return STATION_MAPS[stationId]?.googleMapsUrl || 'https://maps.google.com/?q=FLO+Energy+Zimbabwe';
};
