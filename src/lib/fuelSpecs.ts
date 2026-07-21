export interface FuelSpecification {
  code: string;
  name: string;
  sulfurPpm: number;
  density: string;
  cetaneOctane: string;
  zeraCompliant: boolean;
}

export const FUEL_SPECS: Record<string, FuelSpecification> = {
  diesel50: {
    code: 'D50',
    name: 'Low Sulfur Diesel 50ppm',
    sulfurPpm: 50,
    density: '0.820 - 0.845 kg/L @ 20°C',
    cetaneOctane: 'Cetane Index >= 51',
    zeraCompliant: true,
  },
  petrolE10: {
    code: 'E10',
    name: 'Unleaded Petrol E10 Blend',
    sulfurPpm: 10,
    density: '0.720 - 0.775 kg/L @ 20°C',
    cetaneOctane: 'RON >= 95',
    zeraCompliant: true,
  },
  ifo180: {
    code: 'IFO',
    name: 'Industrial Fuel Oil 180 cSt',
    sulfurPpm: 500,
    density: '0.920 - 0.980 kg/L @ 20°C',
    cetaneOctane: 'Industrial Grade',
    zeraCompliant: true,
  },
};
