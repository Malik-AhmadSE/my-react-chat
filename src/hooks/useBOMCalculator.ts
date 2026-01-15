import { useMemo } from 'react';
import { PanelConfig, RoofConfig, BOMItem, BOMResult } from '@/types/bom';
import { 
  PRODUCTS, 
  ROOF_TYPES, 
  PROFILE_COLORS, 
  calculatePackaging 
} from '@/data/products';

export const useBOMCalculator = (
  panelConfig: PanelConfig,
  roofConfig: RoofConfig
): BOMResult => {
  return useMemo(() => {
    const items: BOMItem[] = [];
    const totalPanels = panelConfig.rows * panelConfig.columns;
    
    if (totalPanels === 0) {
      return {
        items: [],
        totalPanels: 0,
        config: { panel: panelConfig, roof: roofConfig },
      };
    }

    const isBlack = roofConfig.profileColor === PROFILE_COLORS.BLACK;
    const clampIsBlack = roofConfig.clampColor === PROFILE_COLORS.BLACK;

    // Calculate clamps - middle and end clamps
    const middleClamps = (panelConfig.columns - 1) * panelConfig.rows * 2;
    const endClamps = panelConfig.rows * 4;
    
    // Determine clamp size based on panel thickness
    const clampSize = panelConfig.thickness <= 40 ? '30' : '35';

    // Add middle clamps
    const middleClampKey = `KLEM_MIDDEN_${clampSize}_${clampIsBlack ? 'BLACK' : 'ALU'}`;
    const middleClampProduct = PRODUCTS[middleClampKey];
    if (middleClampProduct && middleClamps > 0) {
      items.push({
        productCode: middleClampProduct.code,
        description: middleClampProduct.description,
        required: middleClamps,
        packaged: middleClampProduct.packagingUnit,
        toOrder: calculatePackaging(middleClamps, middleClampProduct.packagingUnit),
      });
    }

    // Add end clamps
    const endClampKey = `KLEM_EIND_${clampSize}_${clampIsBlack ? 'BLACK' : 'ALU'}`;
    const endClampProduct = PRODUCTS[endClampKey];
    if (endClampProduct) {
      items.push({
        productCode: endClampProduct.code,
        description: endClampProduct.description,
        required: endClamps,
        packaged: endClampProduct.packagingUnit,
        toOrder: calculatePackaging(endClamps, endClampProduct.packagingUnit),
      });
    }

    // Calculate profiles based on roof type and panel configuration
    const panelWidth = panelConfig.orientation === 'landscape' 
      ? panelConfig.width 
      : panelConfig.height;
    const totalWidth = (panelWidth * panelConfig.columns) + (20 * (panelConfig.columns - 1)); // 20mm gap between panels
    
    // Determine number of profiles needed (2 profiles per row)
    const profilesPerRow = 2;
    const totalProfiles = profilesPerRow * panelConfig.rows;
    
    // Choose profile length (prefer 6000mm for efficiency)
    const profileLength = totalWidth > 4200 ? 6000 : 4200;
    const profileKey = profileLength === 6000 
      ? `PROFIEL_HOUSE_6000_${isBlack ? 'BLACK' : 'ALU'}`
      : `PROFIEL_HOUSE_4200_${isBlack ? 'BLACK' : 'ALU'}`;
    
    const profileProduct = PRODUCTS[profileKey];
    if (profileProduct) {
      items.push({
        productCode: profileProduct.code,
        description: profileProduct.description,
        required: totalProfiles,
        packaged: profileProduct.packagingUnit,
        toOrder: calculatePackaging(totalProfiles, profileProduct.packagingUnit),
      });
    }

    // Roof type specific items
    switch (roofConfig.roofType) {
      case ROOF_TYPES.SLANTED_ROOF: {
        // Add roof hooks based on hook type
        const hookKey = `DAKHAAK_${roofConfig.hookType?.toUpperCase() || 'NORMAL'}_${isBlack ? 'BLACK' : 'ALU'}`;
        const hookProduct = PRODUCTS[hookKey];
        // Calculate hooks: 3 per row minimum, plus 1 for every 2 columns
        const hooksPerRow = Math.max(3, Math.ceil(panelConfig.columns / 2) + 1);
        const totalHooks = hooksPerRow * panelConfig.rows;
        
        if (hookProduct) {
          items.push({
            productCode: hookProduct.code,
            description: hookProduct.description,
            required: totalHooks,
            packaged: hookProduct.packagingUnit,
            toOrder: calculatePackaging(totalHooks, hookProduct.packagingUnit),
          });
        }

        // Add T-bolts for hooks
        const tBoutProduct = PRODUCTS.T_BOUT_M8;
        if (tBoutProduct) {
          items.push({
            productCode: tBoutProduct.code,
            description: tBoutProduct.description,
            required: totalHooks,
            packaged: tBoutProduct.packagingUnit,
            toOrder: calculatePackaging(totalHooks, tBoutProduct.packagingUnit),
          });
        }
        break;
      }

      case ROOF_TYPES.STEELDECK: {
        // Steeldeck plates
        const plateProduct = PRODUCTS.STEELDECK_PLAATJE_40;
        const platesNeeded = Math.ceil(panelConfig.columns / 2) * panelConfig.rows * 2;
        if (plateProduct) {
          items.push({
            productCode: plateProduct.code,
            description: plateProduct.description,
            required: platesNeeded,
            packaged: plateProduct.packagingUnit,
            toOrder: calculatePackaging(platesNeeded, plateProduct.packagingUnit),
          });
        }

        // Connecting plates
        const connectorProduct = PRODUCTS.STEELDECK_CONNECTING_PLATE;
        const connectorsNeeded = (panelConfig.rows - 1) * 2;
        if (connectorProduct && connectorsNeeded > 0) {
          items.push({
            productCode: connectorProduct.code,
            description: connectorProduct.description,
            required: connectorsNeeded,
            packaged: connectorProduct.packagingUnit,
            toOrder: calculatePackaging(connectorsNeeded, connectorProduct.packagingUnit),
          });
        }

        // Bolts for steeldeck
        const boltProduct = PRODUCTS.STEELDECK_BOUT_M8X30;
        const boltsNeeded = platesNeeded * 4;
        if (boltProduct) {
          items.push({
            productCode: boltProduct.code,
            description: boltProduct.description,
            required: boltsNeeded,
            packaged: boltProduct.packagingUnit,
            toOrder: calculatePackaging(boltsNeeded, boltProduct.packagingUnit),
          });
        }
        break;
      }

      case ROOF_TYPES.SOLARSPEED_EW:
      case ROOF_TYPES.SOLARSPEED_SOUTH: {
        // Solarspeed triangles
        const triangleKey = roofConfig.angle <= 12 ? 'SOLARSPEED_TRIANGLE_10' : 'SOLARSPEED_TRIANGLE_15';
        const triangleProduct = PRODUCTS[triangleKey];
        const trianglesNeeded = totalPanels;
        if (triangleProduct) {
          items.push({
            productCode: triangleProduct.code,
            description: triangleProduct.description,
            required: trianglesNeeded,
            packaged: triangleProduct.packagingUnit,
            toOrder: calculatePackaging(trianglesNeeded, triangleProduct.packagingUnit),
          });
        }

        // Base rails
        const baseRailProduct = PRODUCTS.SOLARSPEED_BASE_RAIL;
        const baseRailsNeeded = panelConfig.rows;
        if (baseRailProduct) {
          items.push({
            productCode: baseRailProduct.code,
            description: baseRailProduct.description,
            required: baseRailsNeeded,
            packaged: baseRailProduct.packagingUnit,
            toOrder: calculatePackaging(baseRailsNeeded, baseRailProduct.packagingUnit),
          });
        }

        // Ballast trays
        const ballastProduct = PRODUCTS.SOLARSPEED_BALLAST_TRAY;
        const ballastNeeded = Math.ceil(totalPanels / 2);
        if (ballastProduct) {
          items.push({
            productCode: ballastProduct.code,
            description: ballastProduct.description,
            required: ballastNeeded,
            packaged: ballastProduct.packagingUnit,
            toOrder: calculatePackaging(ballastNeeded, ballastProduct.packagingUnit),
          });
        }

        // Wind deflectors (for edge panels)
        const windDeflectorProduct = PRODUCTS.SOLARSPEED_WIND_DEFLECTOR;
        const windDeflectorsNeeded = (panelConfig.columns * 2) + (panelConfig.rows * 2);
        if (windDeflectorProduct) {
          items.push({
            productCode: windDeflectorProduct.code,
            description: windDeflectorProduct.description,
            required: windDeflectorsNeeded,
            packaged: windDeflectorProduct.packagingUnit,
            toOrder: calculatePackaging(windDeflectorsNeeded, windDeflectorProduct.packagingUnit),
          });
        }
        break;
      }

      case ROOF_TYPES.ALLFIELD_LANDSCAPE:
      case ROOF_TYPES.ALLFIELD_PORTRAIT: {
        // Allfield triangles
        const triangleKey = roofConfig.angle <= 12 ? 'ALLFIELD_TRIANGLE_10' : 'ALLFIELD_TRIANGLE_15';
        const triangleProduct = PRODUCTS[triangleKey];
        const trianglesNeeded = totalPanels;
        if (triangleProduct) {
          items.push({
            productCode: triangleProduct.code,
            description: triangleProduct.description,
            required: trianglesNeeded,
            packaged: triangleProduct.packagingUnit,
            toOrder: calculatePackaging(trianglesNeeded, triangleProduct.packagingUnit),
          });
        }

        // Base supports
        const baseSupportProduct = PRODUCTS.ALLFIELD_BASE_SUPPORT;
        const baseSupportsNeeded = totalPanels * 2;
        if (baseSupportProduct) {
          items.push({
            productCode: baseSupportProduct.code,
            description: baseSupportProduct.description,
            required: baseSupportsNeeded,
            packaged: baseSupportProduct.packagingUnit,
            toOrder: calculatePackaging(baseSupportsNeeded, baseSupportProduct.packagingUnit),
          });
        }

        // Cross connectors
        const crossConnectorProduct = PRODUCTS.ALLFIELD_CROSS_CONNECTOR;
        const crossConnectorsNeeded = (panelConfig.columns - 1) * panelConfig.rows;
        if (crossConnectorProduct && crossConnectorsNeeded > 0) {
          items.push({
            productCode: crossConnectorProduct.code,
            description: crossConnectorProduct.description,
            required: crossConnectorsNeeded,
            packaged: crossConnectorProduct.packagingUnit,
            toOrder: calculatePackaging(crossConnectorsNeeded, crossConnectorProduct.packagingUnit),
          });
        }

        // Ballast block holders
        const ballastBlockProduct = PRODUCTS.ALLFIELD_BALLAST_BLOCK;
        const ballastBlocksNeeded = totalPanels;
        if (ballastBlockProduct) {
          items.push({
            productCode: ballastBlockProduct.code,
            description: ballastBlockProduct.description,
            required: ballastBlocksNeeded,
            packaged: ballastBlockProduct.packagingUnit,
            toOrder: calculatePackaging(ballastBlocksNeeded, ballastBlockProduct.packagingUnit),
          });
        }
        break;
      }

      case ROOF_TYPES.GROUND_MOUNT: {
        // Schroefpalen (ground screws)
        const schroefpaalProduct = PRODUCTS.SCHROEFPAAL_1000;
        const schroefpalenNeeded = Math.ceil(panelConfig.columns / 2 + 1) * panelConfig.rows;
        if (schroefpaalProduct) {
          items.push({
            productCode: schroefpaalProduct.code,
            description: schroefpaalProduct.description,
            required: schroefpalenNeeded,
            packaged: schroefpaalProduct.packagingUnit,
            toOrder: calculatePackaging(schroefpalenNeeded, schroefpaalProduct.packagingUnit),
          });
        }

        // Paal connectors
        const paalConnectorProduct = PRODUCTS.GM_PAAL_CONNECTOR;
        if (paalConnectorProduct) {
          items.push({
            productCode: paalConnectorProduct.code,
            description: paalConnectorProduct.description,
            required: schroefpalenNeeded,
            packaged: paalConnectorProduct.packagingUnit,
            toOrder: calculatePackaging(schroefpalenNeeded, paalConnectorProduct.packagingUnit),
          });
        }

        // Profile supports
        const profielSupportProduct = PRODUCTS.GM_PROFIEL_SUPPORT;
        const supportsNeeded = schroefpalenNeeded;
        if (profielSupportProduct) {
          items.push({
            productCode: profielSupportProduct.code,
            description: profielSupportProduct.description,
            required: supportsNeeded,
            packaged: profielSupportProduct.packagingUnit,
            toOrder: calculatePackaging(supportsNeeded, profielSupportProduct.packagingUnit),
          });
        }

        // Cross bars
        const crossBarProduct = PRODUCTS.GM_CROSS_BAR;
        const crossBarsNeeded = panelConfig.rows;
        if (crossBarProduct) {
          items.push({
            productCode: crossBarProduct.code,
            description: crossBarProduct.description,
            required: crossBarsNeeded,
            packaged: crossBarProduct.packagingUnit,
            toOrder: calculatePackaging(crossBarsNeeded, crossBarProduct.packagingUnit),
          });
        }
        break;
      }
    }

    // Add common hardware items
    const hamerkopBoutProduct = PRODUCTS.HAMERKOP_BOUT;
    const hamerkopNeeded = middleClamps + endClamps;
    if (hamerkopBoutProduct) {
      items.push({
        productCode: hamerkopBoutProduct.code,
        description: hamerkopBoutProduct.description,
        required: hamerkopNeeded,
        packaged: hamerkopBoutProduct.packagingUnit,
        toOrder: calculatePackaging(hamerkopNeeded, hamerkopBoutProduct.packagingUnit),
      });
    }

    // Profile connectors if needed
    if (panelConfig.rows > 1) {
      const connectorKey = `PROFIEL_CONNECTOR_${isBlack ? 'BLACK' : 'ALU'}`;
      const connectorProduct = PRODUCTS[connectorKey];
      const connectorsNeeded = (panelConfig.rows - 1) * 2;
      if (connectorProduct) {
        items.push({
          productCode: connectorProduct.code,
          description: connectorProduct.description,
          required: connectorsNeeded,
          packaged: connectorProduct.packagingUnit,
          toOrder: calculatePackaging(connectorsNeeded, connectorProduct.packagingUnit),
        });
      }
    }

    return {
      items,
      totalPanels,
      config: { panel: panelConfig, roof: roofConfig },
    };
  }, [panelConfig, roofConfig]);
};
