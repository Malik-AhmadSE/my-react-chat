import { RoofType, HookType, ProfileColor, ProfileType, RoofingType } from '@/data/products';

export interface PanelConfig {
  height: number; // mm
  width: number; // mm
  thickness: number; // mm
  orientation: 'landscape' | 'portrait';
  rows: number;
  columns: number;
}

export interface RoofConfig {
  roofType: RoofType;
  // Slanted Roof specific
  roofingType?: RoofingType;
  hookType?: HookType;
  profileType?: ProfileType;
  profileColor: ProfileColor;
  clampColor: ProfileColor;
  // Flat roof specific
  angle: number;
  // Steeldeck specific
  plateType?: 'plate_15' | 'plate_40' | 'connecting_plate';
  // Ground mount specific
  schroefpaalLength?: 750 | 1000 | 1500;
}

export interface BOMItem {
  productCode: string;
  description: string;
  required: number;
  packaged: number;
  toOrder: number;
}

export interface BOMResult {
  items: BOMItem[];
  totalPanels: number;
  config: {
    panel: PanelConfig;
    roof: RoofConfig;
  };
}
