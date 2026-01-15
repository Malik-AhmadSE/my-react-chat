import { RoofType, HookType, ProfileColor } from '@/data/products';

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
  hookType?: HookType;
  angle: number;
  profileColor: ProfileColor;
  clampColor: ProfileColor;
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
