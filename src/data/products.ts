// Axxiom Solar Panel Mounting System Products Database

export interface Product {
  code: string;
  description: string;
  packagingUnit: number;
  category: string;
}

// Roof Types
export const ROOF_TYPES = {
  ALLFIELD_LANDSCAPE: 'allfield_landscape',
  ALLFIELD_PORTRAIT: 'allfield_portrait',
  SLANTED_ROOF: 'slanted_roof',
  STEELDECK: 'steeldeck',
  SOLARSPEED_EW: 'solarspeed_ew',
  SOLARSPEED_SOUTH: 'solarspeed_south',
  GROUND_MOUNT: 'ground_mount',
} as const;

export type RoofType = typeof ROOF_TYPES[keyof typeof ROOF_TYPES];

export const ROOF_TYPE_LABELS: Record<RoofType, string> = {
  [ROOF_TYPES.ALLFIELD_LANDSCAPE]: 'Allfield/Triangle - Landscape',
  [ROOF_TYPES.ALLFIELD_PORTRAIT]: 'Allfield/Triangle - Portrait',
  [ROOF_TYPES.SLANTED_ROOF]: 'Hellend Dak',
  [ROOF_TYPES.STEELDECK]: 'Steeldeck',
  [ROOF_TYPES.SOLARSPEED_EW]: 'Solarspeed - Oost/West',
  [ROOF_TYPES.SOLARSPEED_SOUTH]: 'Solarspeed - Zuid',
  [ROOF_TYPES.GROUND_MOUNT]: 'Grondmontage',
};

// Hook Types for Slanted Roof
export const HOOK_TYPES = {
  NORMAL: 'normal',
  LONG: 'long',
  HYBRID: 'hybrid',
  OPTIMUM: 'optimum',
  SLATE: 'slate',
  ZINC: 'zinc',
} as const;

export type HookType = typeof HOOK_TYPES[keyof typeof HOOK_TYPES];

export const HOOK_TYPE_LABELS: Record<HookType, string> = {
  [HOOK_TYPES.NORMAL]: 'Dakhaak Normaal',
  [HOOK_TYPES.LONG]: 'Dakhaak Lang',
  [HOOK_TYPES.HYBRID]: 'Dakhaak Hybrid',
  [HOOK_TYPES.OPTIMUM]: 'Dakhaak Optimum',
  [HOOK_TYPES.SLATE]: 'Leisteen Haak',
  [HOOK_TYPES.ZINC]: 'Zink Haak',
};

// Profile Colors
export const PROFILE_COLORS = {
  ALU: 'alu',
  BLACK: 'black',
} as const;

export type ProfileColor = typeof PROFILE_COLORS[keyof typeof PROFILE_COLORS];

export const PROFILE_COLOR_LABELS: Record<ProfileColor, string> = {
  [PROFILE_COLORS.ALU]: 'Aluminium',
  [PROFILE_COLORS.BLACK]: 'Zwart',
};

// Clamp Types
export const CLAMP_TYPES = {
  MIDDLE: 'middle',
  END: 'end',
} as const;

// Angle Options
export const ANGLE_OPTIONS = [10, 12.5, 15, 20, 25, 30] as const;

// Products Database
export const PRODUCTS: Record<string, Product> = {
  // Schroefpalen (Ground Mount)
  SCHROEFPAAL_750: {
    code: '1HGM01DD001',
    description: 'Schroefpaal 750mm',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  SCHROEFPAAL_1000: {
    code: '1HGM01DD002',
    description: 'Schroefpaal 1000mm',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  SCHROEFPAAL_1500: {
    code: '1HGM01DD003',
    description: 'Schroefpaal 1500mm',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  
  // Dakhaken (Roof Hooks)
  DAKHAAK_NORMAL_ALU: {
    code: '1HSR01DD001',
    description: 'Dakhaak Normaal - ALU',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_NORMAL_BLACK: {
    code: '1HSR01DD002',
    description: 'Dakhaak Normaal - Zwart',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_LONG_ALU: {
    code: '1HSR02DD001',
    description: 'Dakhaak Lang - ALU',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_LONG_BLACK: {
    code: '1HSR02DD002',
    description: 'Dakhaak Lang - Zwart',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_HYBRID_ALU: {
    code: '1HSR03DD001',
    description: 'Dakhaak Hybrid - ALU',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_HYBRID_BLACK: {
    code: '1HSR03DD002',
    description: 'Dakhaak Hybrid - Zwart',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_OPTIMUM_ALU: {
    code: '1HSR04DD001',
    description: 'Dakhaak Optimum - ALU',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  DAKHAAK_OPTIMUM_BLACK: {
    code: '1HSR04DD002',
    description: 'Dakhaak Optimum - Zwart',
    packagingUnit: 25,
    category: 'slanted_roof',
  },
  
  // Klemmen (Clamps)
  KLEM_MIDDEN_30_ALU: {
    code: '1HME15DD001',
    description: 'Middenklem 30-40mm - ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_MIDDEN_30_BLACK: {
    code: '1HME15DD002',
    description: 'Middenklem 30-40mm - Zwart',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_EIND_30_ALU: {
    code: '1HME16DD001',
    description: 'Eindklem 30-40mm - ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_EIND_30_BLACK: {
    code: '1HME16DD002',
    description: 'Eindklem 30-40mm - Zwart',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_MIDDEN_35_ALU: {
    code: '1HME17DD001',
    description: 'Middenklem 35-50mm - ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_MIDDEN_35_BLACK: {
    code: '1HME17DD002',
    description: 'Middenklem 35-50mm - Zwart',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_EIND_35_ALU: {
    code: '1HME18DD001',
    description: 'Eindklem 35-50mm - ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLEM_EIND_35_BLACK: {
    code: '1HME18DD002',
    description: 'Eindklem 35-50mm - Zwart',
    packagingUnit: 20,
    category: 'clamps',
  },
  
  // Profielen (Profiles)
  PROFIEL_HOUSE_4200_ALU: {
    code: '1HPR01DD001',
    description: 'House Profiel 4200mm - ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_HOUSE_4200_BLACK: {
    code: '1HPR01DD002',
    description: 'House Profiel 4200mm - Zwart',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_HOUSE_6000_ALU: {
    code: '1HPR02DD001',
    description: 'House Profiel 6000mm - ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_HOUSE_6000_BLACK: {
    code: '1HPR02DD002',
    description: 'House Profiel 6000mm - Zwart',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_FEATHER_4200_ALU: {
    code: '1HPR03DD001',
    description: 'Feather Profiel 4200mm - ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_FEATHER_4200_BLACK: {
    code: '1HPR03DD002',
    description: 'Feather Profiel 4200mm - Zwart',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_FEATHER_6000_ALU: {
    code: '1HPR04DD001',
    description: 'Feather Profiel 6000mm - ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_FEATHER_6000_BLACK: {
    code: '1HPR04DD002',
    description: 'Feather Profiel 6000mm - Zwart',
    packagingUnit: 1,
    category: 'profiles',
  },
  
  // Profile Connectors
  PROFIEL_CONNECTOR_ALU: {
    code: '1HPC01DD001',
    description: 'Profiel Connector - ALU',
    packagingUnit: 10,
    category: 'connectors',
  },
  PROFIEL_CONNECTOR_BLACK: {
    code: '1HPC01DD002',
    description: 'Profiel Connector - Zwart',
    packagingUnit: 10,
    category: 'connectors',
  },
  
  // Steeldeck Items
  STEELDECK_PLAATJE_15: {
    code: '1HSD01DD001',
    description: 'Steeldeck Plaatje 15cm',
    packagingUnit: 10,
    category: 'steeldeck',
  },
  STEELDECK_PLAATJE_40: {
    code: '1HSD01DD002',
    description: 'Steeldeck Plaatje 40cm',
    packagingUnit: 10,
    category: 'steeldeck',
  },
  STEELDECK_CONNECTING_PLATE: {
    code: '1HSD02DD001',
    description: 'Steeldeck Connecting Plate',
    packagingUnit: 10,
    category: 'steeldeck',
  },
  STEELDECK_BOUT_M8X30: {
    code: '1HSD03DD001',
    description: 'Bout M8x30 RVS',
    packagingUnit: 100,
    category: 'steeldeck',
  },
  
  // Solarspeed Items
  SOLARSPEED_TRIANGLE_10: {
    code: '1HSS01DD001',
    description: 'Solarspeed Triangle 10°',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_TRIANGLE_15: {
    code: '1HSS01DD002',
    description: 'Solarspeed Triangle 15°',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BASE_RAIL: {
    code: '1HSS02DD001',
    description: 'Solarspeed Base Rail 2400mm',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BALLAST_TRAY: {
    code: '1HSS03DD001',
    description: 'Solarspeed Ballast Tray',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_WIND_DEFLECTOR: {
    code: '1HSS04DD001',
    description: 'Solarspeed Wind Deflector',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  
  // Allfield/Triangle Items
  ALLFIELD_TRIANGLE_10: {
    code: '1HAF01DD001',
    description: 'Allfield Triangle 10°',
    packagingUnit: 1,
    category: 'allfield',
  },
  ALLFIELD_TRIANGLE_15: {
    code: '1HAF01DD002',
    description: 'Allfield Triangle 15°',
    packagingUnit: 1,
    category: 'allfield',
  },
  ALLFIELD_BASE_SUPPORT: {
    code: '1HAF02DD001',
    description: 'Allfield Base Support',
    packagingUnit: 1,
    category: 'allfield',
  },
  ALLFIELD_CROSS_CONNECTOR: {
    code: '1HAF03DD001',
    description: 'Allfield Cross Connector',
    packagingUnit: 10,
    category: 'allfield',
  },
  ALLFIELD_BALLAST_BLOCK: {
    code: '1HAF04DD001',
    description: 'Allfield Ballast Block Holder',
    packagingUnit: 4,
    category: 'allfield',
  },
  
  // Hardware / Bevestigingsmateriaal
  BOUT_M8X20: {
    code: '1HHW01DD001',
    description: 'Bout M8x20 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  BOUT_M8X25: {
    code: '1HHW01DD002',
    description: 'Bout M8x25 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  BOUT_M8X30: {
    code: '1HHW01DD003',
    description: 'Bout M8x30 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  BOUT_M10X25: {
    code: '1HHW02DD001',
    description: 'Bout M10x25 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  BOUT_M10X30: {
    code: '1HHW02DD002',
    description: 'Bout M10x30 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  MOER_M8: {
    code: '1HHW03DD001',
    description: 'Moer M8 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  MOER_M10: {
    code: '1HHW03DD002',
    description: 'Moer M10 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  RONDEL_M8: {
    code: '1HHW04DD001',
    description: 'Rondel M8 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  RONDEL_M10: {
    code: '1HHW04DD002',
    description: 'Rondel M10 RVS A2',
    packagingUnit: 100,
    category: 'hardware',
  },
  T_BOUT_M8: {
    code: '1HHW05DD001',
    description: 'T-Bout M8x40',
    packagingUnit: 50,
    category: 'hardware',
  },
  HAMERKOP_BOUT: {
    code: '1HHW06DD001',
    description: 'Hamerkop Bout M8x25',
    packagingUnit: 50,
    category: 'hardware',
  },
  
  // Cable Management
  KABELGOOT: {
    code: '1HCM01DD001',
    description: 'Kabelgoot 2000mm',
    packagingUnit: 1,
    category: 'cable_management',
  },
  KABELCLIP: {
    code: '1HCM02DD001',
    description: 'Kabelclip voor Profiel',
    packagingUnit: 100,
    category: 'cable_management',
  },
  
  // Ground Mount Specific
  GM_PAAL_CONNECTOR: {
    code: '1HGM02DD001',
    description: 'Grondmontage Paal Connector',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  GM_PROFIEL_SUPPORT: {
    code: '1HGM03DD001',
    description: 'Grondmontage Profiel Support',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  GM_CROSS_BAR: {
    code: '1HGM04DD001',
    description: 'Grondmontage Cross Bar',
    packagingUnit: 1,
    category: 'ground_mount',
  },
};

// Helper function to get product by key
export const getProduct = (key: string): Product | undefined => {
  return PRODUCTS[key];
};

// Helper function to calculate packaging
export const calculatePackaging = (required: number, packagingUnit: number): number => {
  return Math.ceil(required / packagingUnit) * packagingUnit;
};
