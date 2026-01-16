import { useMemo } from 'react';
import { PanelConfig, RoofConfig, BOMItem, BOMResult } from '@/types/bom';
import { ROOF_TYPES } from '@/data/products';
import { calculateSlantedRoof } from './useSlantedRoofCalculator';

export const useBOMCalculator = (
  panelConfig: PanelConfig,
  roofConfig: RoofConfig
): BOMResult => {
  return useMemo(() => {
    const totalPanels = panelConfig.rows * panelConfig.columns;
    
    if (totalPanels === 0) {
      return {
        items: [],
        totalPanels: 0,
        config: { panel: panelConfig, roof: roofConfig },
      };
    }

    let items: BOMItem[] = [];

    // Route to appropriate calculator based on roof type
    switch (roofConfig.roofType) {
      case ROOF_TYPES.SLANTED_ROOF:
        items = calculateSlantedRoof(panelConfig, roofConfig);
        break;

      case ROOF_TYPES.ALLFIELD_LANDSCAPE:
      case ROOF_TYPES.ALLFIELD_PORTRAIT:
        // TODO: Implement Allfield calculator
        items = [];
        break;

      case ROOF_TYPES.STEELDECK:
        // TODO: Implement Steeldeck calculator
        items = [];
        break;

      case ROOF_TYPES.SOLARSPEED_EW:
      case ROOF_TYPES.SOLARSPEED_SOUTH:
        // TODO: Implement Solarspeed calculator
        items = [];
        break;

      case ROOF_TYPES.GROUND_MOUNT:
        // TODO: Implement Ground Mount calculator
        items = [];
        break;

      case ROOF_TYPES.STEELDECK_SOLARSPEED_SOUTH:
        // TODO: Implement Steeldeck Solarspeed South calculator
        items = [];
        break;

      case ROOF_TYPES.STEELDECK_TRIANGLE:
        // TODO: Implement Steeldeck Triangle calculator
        items = [];
        break;

      case ROOF_TYPES.FLAT_ROOF_TRIANGLE:
        // TODO: Implement Flat Roof Triangle calculator
        items = [];
        break;

      default:
        items = [];
    }

    return {
      items,
      totalPanels,
      config: { panel: panelConfig, roof: roofConfig },
    };
  }, [panelConfig, roofConfig]);
};
