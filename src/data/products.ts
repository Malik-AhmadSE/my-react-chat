// Axxiom Solar Panel Mounting System Products Database

export interface Product {
  code: string;
  description: string;
  packagingUnit: number;
  category: string;
}

// Roof Types
export const ROOF_TYPES = {
  SLANTED_ROOF: 'slanted_roof',
  ALLFIELD_LANDSCAPE: 'allfield_landscape',
  ALLFIELD_PORTRAIT: 'allfield_portrait',
  STEELDECK: 'steeldeck',
  SOLARSPEED_EW: 'solarspeed_ew',
  SOLARSPEED_SOUTH: 'solarspeed_south',
  GROUND_MOUNT: 'ground_mount',
  STEELDECK_SOLARSPEED_SOUTH: 'steeldeck_solarspeed_south',
  STEELDECK_TRIANGLE: 'steeldeck_triangle',
  FLAT_ROOF_TRIANGLE: 'flat_roof_triangle',
} as const;

export type RoofType = typeof ROOF_TYPES[keyof typeof ROOF_TYPES];

export const ROOF_TYPE_LABELS: Record<RoofType, string> = {
  [ROOF_TYPES.SLANTED_ROOF]: 'Slanted Roof',
  [ROOF_TYPES.ALLFIELD_LANDSCAPE]: 'Allfield - Landscape',
  [ROOF_TYPES.ALLFIELD_PORTRAIT]: 'Allfield - Portrait',
  [ROOF_TYPES.STEELDECK]: 'Steeldeck',
  [ROOF_TYPES.SOLARSPEED_EW]: 'Flat Roof - East/West',
  [ROOF_TYPES.SOLARSPEED_SOUTH]: 'Flat Roof - South',
  [ROOF_TYPES.GROUND_MOUNT]: 'Ground Mount',
  [ROOF_TYPES.STEELDECK_SOLARSPEED_SOUTH]: 'Steeldeck Solarspeed - South',
  [ROOF_TYPES.STEELDECK_TRIANGLE]: 'Steeldeck Triangle',
  [ROOF_TYPES.FLAT_ROOF_TRIANGLE]: 'Flat Roof Triangle',
};

// Roofing Material Types for Slanted Roof
export const ROOFING_TYPES = {
  TILED: 'tiled',
  SLATES: 'slates',
  ZINC: 'zinc',
} as const;

export type RoofingType = typeof ROOFING_TYPES[keyof typeof ROOFING_TYPES];

export const ROOFING_TYPE_LABELS: Record<RoofingType, string> = {
  [ROOFING_TYPES.TILED]: 'Tiled',
  [ROOFING_TYPES.SLATES]: 'Slates',
  [ROOFING_TYPES.ZINC]: 'Zinc',
};

// Hook Types for Slanted Roof - organized by roofing type
export const HOOK_TYPES = {
  // Tiled hooks
  NORMAL: 'normal',
  LONG: 'long',
  HYBRID: 'hybrid',
  OPTIMUM: 'optimum',
  OPTI_CLASSIC: 'opti_classic',
  // Slates hooks
  SLATES_NORMAL: 'slates_normal',
  // Zinc hooks
  ZINC_ROUND: 'zinc_round',
  ZINC_STAND_SEAM: 'zinc_stand_seam',
} as const;

export type HookType = typeof HOOK_TYPES[keyof typeof HOOK_TYPES];

export const HOOK_TYPE_LABELS: Record<HookType, string> = {
  [HOOK_TYPES.NORMAL]: 'Normal (Standard)',
  [HOOK_TYPES.LONG]: 'Long',
  [HOOK_TYPES.HYBRID]: 'Hybrid',
  [HOOK_TYPES.OPTIMUM]: 'Optimum',
  [HOOK_TYPES.OPTI_CLASSIC]: 'Optimum Classic',
  [HOOK_TYPES.SLATES_NORMAL]: 'Slates - Normal',
  [HOOK_TYPES.ZINC_ROUND]: 'Zinc - Round',
  [HOOK_TYPES.ZINC_STAND_SEAM]: 'Zinc - Stand Seam',
};

// Hooks grouped by roofing type
export const HOOKS_BY_ROOFING: Record<RoofingType, HookType[]> = {
  [ROOFING_TYPES.TILED]: [
    HOOK_TYPES.NORMAL,
    HOOK_TYPES.LONG,
    HOOK_TYPES.HYBRID,
    HOOK_TYPES.OPTIMUM,
    HOOK_TYPES.OPTI_CLASSIC,
  ],
  [ROOFING_TYPES.SLATES]: [HOOK_TYPES.SLATES_NORMAL],
  [ROOFING_TYPES.ZINC]: [HOOK_TYPES.ZINC_ROUND, HOOK_TYPES.ZINC_STAND_SEAM],
};

// Profile Types
export const PROFILE_TYPES = {
  HOUSE: 'house',
  FEATHER: 'feather',
} as const;

export type ProfileType = typeof PROFILE_TYPES[keyof typeof PROFILE_TYPES];

export const PROFILE_TYPE_LABELS: Record<ProfileType, string> = {
  [PROFILE_TYPES.HOUSE]: 'House Profile',
  [PROFILE_TYPES.FEATHER]: 'Feather Profile',
};

// Profile Colors
export const PROFILE_COLORS = {
  ALU: 'alu',
  BLACK: 'black',
} as const;

export type ProfileColor = typeof PROFILE_COLORS[keyof typeof PROFILE_COLORS];

export const PROFILE_COLOR_LABELS: Record<ProfileColor, string> = {
  [PROFILE_COLORS.ALU]: 'Aluminium',
  [PROFILE_COLORS.BLACK]: 'Black',
};

// Clamp Types
export const CLAMP_TYPES = {
  MIDDLE: 'middle',
  END: 'end',
} as const;

// Angle Options
export const ANGLE_OPTIONS = [10, 12.5, 15, 20, 25, 30] as const;

// Products Database - Updated with exact Excel codes
export const PRODUCTS: Record<string, Product> = {
  // ===== ROOF HOOKS (Slanted Roof) =====
  // Tiled - Normal
  DAKHAAK_NORMAL: {
    code: '1HME15DD001',
    description: 'DAKHAAK DUBBEL VERSTELBAAR RVS',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Tiled - Long
  DAKHAAK_LONG: {
    code: '1HME15DD002',
    description: 'DAKHAAK DUBBEL VERSTELBAAR TEGELPAN',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Tiled - Hybrid
  DAKHAAK_HYBRID: {
    code: '1HME15DD003',
    description: 'DAKHAAK DUBBEL VERSTELBAAR HYBRIDE',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Tiled - Optimum
  DAKHAAK_OPTIMUM: {
    code: '1HME15DD009',
    description: 'DAKHAAK DUBBEL VERSTELBAAR OPTIMUM',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Tiled - Optimum Classic
  DAKHAAK_OPTI_CLASSIC: {
    code: '1HME15DD011',
    description: 'DAKHAAK DUBBEL VERSTELBAAR OPTIMUM CLASSIC',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Slates - Normal
  DAKHAAK_SLATES_NORMAL: {
    code: '1HME15DE002',
    description: 'DAKHAAK ENKEL VERSTELBAAR LEI RVS PLAT',
    packagingUnit: 30,
    category: 'slanted_roof',
  },
  // Zinc - Round
  DAKHAAK_ZINC_ROUND: {
    code: '1HME15DV003',
    description: 'ZINKEN DAK KLEM ROND',
    packagingUnit: 50,
    category: 'slanted_roof',
  },
  // Zinc - Stand Seam
  DAKHAAK_ZINC_STAND_SEAM: {
    code: '1HME15DV006',
    description: 'ZINKEN DAK KLEM STAANDE NAAD',
    packagingUnit: 50,
    category: 'slanted_roof',
  },

  // ===== PROFILES =====
  // House Profile 6.00M
  PROFIEL_HOUSE_6000_ALU: {
    code: '1HME43AL050',
    description: 'HUISPROFIEL ALLIMEX 6,00M ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_HOUSE_6000_BLACK: {
    code: '1HME43ZW041',
    description: 'HUISPROFIEL ALLIMEX 6,00M ZWART',
    packagingUnit: 1,
    category: 'profiles',
  },
  // Feather Profile 6.00M
  PROFIEL_FEATHER_6000_ALU: {
    code: '1HME43AL035',
    description: 'PROFIEL FEATHER 6,00M ALU',
    packagingUnit: 1,
    category: 'profiles',
  },
  PROFIEL_FEATHER_6000_BLACK: {
    code: '1HME43ZW044',
    description: 'PROFIEL FEATHER 6,00M ZWART',
    packagingUnit: 1,
    category: 'profiles',
  },
  // Large Span Profile
  PROFIEL_GROTE_OVERSPANNING: {
    code: '1HME43AL006',
    description: 'PROFIEL GROTE OVERSPANNING 80/40 6,20M ALU',
    packagingUnit: 1,
    category: 'profiles',
  },

  // ===== PROFILE CONNECTORS =====
  PROFIELVERBINDER_ALU: {
    code: '1HMEACPV001',
    description: 'PROFIELVERBINDER 40MM ALU',
    packagingUnit: 10,
    category: 'connectors',
  },
  PROFIELVERBINDER_BLACK: {
    code: '1HMEACPV002',
    description: 'PROFIELVERBINDER 40MM ZWART',
    packagingUnit: 10,
    category: 'connectors',
  },

  // ===== CLAMPS - KLIK SYSTEM =====
  // Middle clamps 30-40mm
  KLIKMIDDENKLEM_30_40_ALU: {
    code: '1HME32KK003',
    description: 'KLIKMIDDENKLEM 30-40MM ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLIKMIDDENKLEM_30_40_BLACK: {
    code: '1HME32KK004',
    description: 'KLIKMIDDENKLEM 30-40MM ZWART',
    packagingUnit: 20,
    category: 'clamps',
  },
  // End clamps 30mm
  KLIKEINDKLEM_30_ALU: {
    code: '1HME32KK024',
    description: 'KLIKEINDKLEM 30MM ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLIKEINDKLEM_30_BLACK: {
    code: '1HME32KK025',
    description: 'KLIKEINDKLEM 30MM ZWART',
    packagingUnit: 20,
    category: 'clamps',
  },
  // End clamps 35mm
  KLIKEINDKLEM_35_ALU: {
    code: '1HME32KK010',
    description: 'KLIKEINDKLEM 35MM ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  KLIKEINDKLEM_35_BLACK: {
    code: '1HME32KK016',
    description: 'KLIKEINDKLEM 35MM ZWART',
    packagingUnit: 20,
    category: 'clamps',
  },

  // ===== CLAMPS - SOLARSPEED (60MM Length) =====
  // Middle clamps Basic for Solarspeed
  MIDDENKLEM_BASIC_ALU: {
    code: '1HME32SR085',
    description: 'MIDDENKLEM BASIC ALU LENGTE 60MM',
    packagingUnit: 10,
    category: 'clamps',
  },
  MIDDENKLEM_BASIC_BLACK: {
    code: '1HME32SR086',
    description: 'MIDDENKLEM BASIC ZWART LENGTE 60MM',
    packagingUnit: 10,
    category: 'clamps',
  },
  // End clamps 35mm L60MM
  EINDKLEM_35_L60_ALU: {
    code: '1HME32SR071',
    description: 'EINDKLEM 35MM LENGTE 60MM ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  EINDKLEM_35_L60_BLACK: {
    code: '1HME32SR072',
    description: 'EINDKLEM 35MM LENGTE 60MM ZWART',
    packagingUnit: 20,
    category: 'clamps',
  },
  // End clamps 30mm L60MM with grounding
  EINDKLEM_30_L60_ALU: {
    code: '1HME32SR097',
    description: 'EINDKLEM 30MM MET AARDING LENGTE 60MM ALU',
    packagingUnit: 20,
    category: 'clamps',
  },
  EINDKLEM_30_L60_BLACK: {
    code: '1HME32SR096',
    description: 'EINDKLEM 30MM MET AARDING LENGTE 60MM ZWART',
    packagingUnit: 20,
    category: 'clamps',
  },

  // ===== END CAPS (Sluitstop) =====
  SLUITSTOP_ALU: {
    code: '1HMEACPS002',
    description: 'SLUITSTOP VOOR PROFIEL 40X40 ALU',
    packagingUnit: 50,
    category: 'accessories',
  },
  SLUITSTOP_BLACK: {
    code: '1HME0ACPS001',
    description: 'SLUITSTOP VOOR PROFIEL 40X40 ZWART',
    packagingUnit: 50,
    category: 'accessories',
  },

  // ===== BOLTS & SCREWS =====
  // Wood screws for roof hooks
  HOUTSCHROEF_6X70: {
    code: '1HME46HT001',
    description: 'HOUTSCHROEF 6X70 TX25',
    packagingUnit: 100,
    category: 'hardware',
  },
  HOUTSCHROEF_8X80: {
    code: '1HME46HT004',
    description: 'HOUTSCHROEF 8X80 TX40',
    packagingUnit: 100,
    category: 'hardware',
  },
  // Inbus bolts
  INBUS_BOUT_M8X16: {
    code: '1HME10BT014',
    description: 'INBUS BOUT M8X16',
    packagingUnit: 100,
    category: 'hardware',
  },
  INBUS_BOUT_M8X30: {
    code: '1HME10BT019',
    description: 'INBUS BOUT M8X30',
    packagingUnit: 100,
    category: 'hardware',
  },
  // Hex bolts
  ZESKANT_BOUT_M10X30: {
    code: '1HME10BT037',
    description: 'ZESKANT BOUT M10X30',
    packagingUnit: 100,
    category: 'hardware',
  },
  ZESKANT_BOUT_M16X35: {
    code: '1HME10BT043',
    description: 'ZESKANT BOUT M16X35',
    packagingUnit: 100,
    category: 'hardware',
  },
  // Bi-metal screws for steeldeck
  BIMETAL_SCHROEF_6X25: {
    code: '1HME46BM003',
    description: 'BI-METAL SCHROEVEN VOOR STEELDECKPLAATJE 6,0 X 25',
    packagingUnit: 100,
    category: 'hardware',
  },
  // Plate screws for solarspeed
  PLAATSCHROEF_6_5X19: {
    code: '1HME46PL001',
    description: 'PLAATSCHROEF 6,5X19 VOOR SOLARSPEED',
    packagingUnit: 100,
    category: 'hardware',
  },

  // ===== NUTS & WASHERS =====
  KARTELMOER_M10: {
    code: '1HME10MR001',
    description: 'KARTELMOER M10',
    packagingUnit: 100,
    category: 'hardware',
  },
  KLIKMOER_M8: {
    code: '1HME10MR004',
    description: 'KLIKMOER M8',
    packagingUnit: 100,
    category: 'hardware',
  },
  RONDEL_M8: {
    code: '1HME10RD001',
    description: 'RONDEL M8',
    packagingUnit: 100,
    category: 'hardware',
  },
  RONDEL_M16: {
    code: '1HME10RD004',
    description: 'RONDEL M16 17MM',
    packagingUnit: 100,
    category: 'hardware',
  },

  // ===== L-STUK (For mounting) =====
  L_STUK_DAKHAAK: {
    code: '1HME15AC003',
    description: 'L-STUK DAKHAAK',
    packagingUnit: 1,
    category: 'accessories',
  },

  // ===== STEELDECK PLATES =====
  STEELDECK_PLAATJE_15CM: {
    code: '1HME15SD005',
    description: 'STEELDECK PLAATJE MET EPDM - LANDSCAPE -15CM',
    packagingUnit: 35,
    category: 'steeldeck',
  },
  STEELDECK_PLAATJE_40CM: {
    code: '1HME15SD006',
    description: 'STEELDECKPLAAT met EPDM ALU 40CM',
    packagingUnit: 35,
    category: 'steeldeck',
  },

  // ===== L-PROFILE (Support) =====
  L_PROFIEL_6M: {
    code: '1HFR43AL002',
    description: 'L-PROFIEL 40X40X3MM 6,00M ALU',
    packagingUnit: 1,
    category: 'profiles',
  },

  // ===== GROUND MOUNT (Schroefpalen) =====
  SCHROEFPAAL_750: {
    code: '1FLD45GA002',
    description: 'SCHROEFPAAL 750MM GALVA',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  SCHROEFPAAL_1000: {
    code: '1FLD45GA005',
    description: 'SCHROEFPAAL 1000MM GALVA',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  SCHROEFPAAL_1500: {
    code: '1FLD45GA004',
    description: 'SCHROEFPAAL 1500MM GALVA',
    packagingUnit: 1,
    category: 'ground_mount',
  },
  SCHROEFPAAL_RVS_PLAATJE: {
    code: '1FLD45AC001',
    description: 'SCHROEFPAAL RVS PLAATJE SCHANS ACCESSOIRE',
    packagingUnit: 1,
    category: 'ground_mount',
  },

  // ===== ALLFIELD / TRIANGLE =====
  VERSTELBARE_SCHANS_S: {
    code: '1FLD19ZZ001',
    description: 'VERSTELBARE SCHANS - S - 1PT/2LS',
    packagingUnit: 1,
    category: 'allfield',
  },
  VERSTELBARE_SCHANS_M: {
    code: '1FLD19ZZ002',
    description: 'VERSTELBARE SCHANS - M - 2PT/3LS',
    packagingUnit: 1,
    category: 'allfield',
  },
  VERSTELBARE_SCHANS_L: {
    code: '1FLD19ZZ003',
    description: 'VERSTELBARE SCHANS - L - 4LS',
    packagingUnit: 1,
    category: 'allfield',
  },
  VERSTELBARE_SCHANS_XL: {
    code: '1FLD19ZZ004',
    description: 'VERSTELBARE SCHANS - XL - 3PT/5LS',
    packagingUnit: 1,
    category: 'allfield',
  },

  // ===== SOLARSPEED =====
  SOLARSPEED_EW_1020: {
    code: '1SSP19EW017',
    description: 'SOLARSPEED 3.0 OOST-WEST LANDSCAPE 1020MM (PAN.1101/1140) 12,5° STEEK 2450MM +RUBBER +TUBTARA',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_SOUTH_10_1500: {
    code: '1SSP19NZ020',
    description: 'SOLARSPEED 3.0 NOORD-ZUID LANDSCAPE 10° STEEK 1500MM +RUBBER + TUBTARA',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_SOUTH_12_5_1600: {
    code: '1SSP19NZ023',
    description: 'SOLARSPEED 3.0 NOORD-ZUID LANDSCAPE 12,5° STEEK 1600MM +RUBBER +TUBTARA',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  KOPPELSTUK_L_BALLAST: {
    code: '1SSP99AC030',
    description: 'KOPPELSTUK SOLARSPEED L-BALLAST 40MM MET RUBBER',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  DRUKNAGEL_SOLARSPEED: {
    code: '1SSP99AC034',
    description: 'DRUKNAGEL SOLARSPEED',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  EINDRUBBER_SOLARSPEED: {
    code: '1SSP99AC038',
    description: 'EINDRUBBER SOLARSPEED',
    packagingUnit: 1,
    category: 'solarspeed',
  },

  // ===== SOLARSPEED L-PROFILES =====
  SOLARSPEED_L_PROFILE_1200: {
    code: '1SSP99AC081',
    description: 'SOLARSPEED L-PROFILE 1131/1204 - 1200MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_1345: {
    code: '1SSP99AC107',
    description: 'SOLARSPEED L-PROFILE 1305/1350 - 1345MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_1805: {
    code: '1SSP99AC077',
    description: 'SOLARSPEED L-PROFILE 1731/1810 - 1805MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_1885: {
    code: '1SSP99AC082',
    description: 'SOLARSPEED L-PROFILE 1811/1890 - 1885MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_1965: {
    code: '1SSP99AC083',
    description: 'SOLARSPEED L-PROFILE 1891/1970 - 1965MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_2045: {
    code: '1SSP99AC084',
    description: 'SOLARSPEED L-PROFILE 1971/2050 - 2045MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_2125: {
    code: '1SSP99AC079',
    description: 'SOLARSPEED L-PROFILE 2051/2130 - 2125MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_2205: {
    code: '1SSP99AC080',
    description: 'SOLARSPEED L-PROFILE 2131/2210 - 2205MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_L_PROFILE_2285: {
    code: '1SSP99AC101',
    description: 'SOLARSPEED L-PROFILE 2211/2290 - 2285MM - SET OF 2',
    packagingUnit: 1,
    category: 'solarspeed',
  },

  // ===== SOLARSPEED BACKPLATES =====
  SOLARSPEED_BACKPLATE_1805: {
    code: '1SSP99AC086',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 1805MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_1885: {
    code: '1SSP99AC090',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 1885MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_1965: {
    code: '1SSP99AC091',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 1965MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_2045: {
    code: '1SSP99AC087',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 2045MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_2125: {
    code: '1SSP99AC088',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 2125MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_2205: {
    code: '1SSP99AC089',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 2205MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },
  SOLARSPEED_BACKPLATE_2280: {
    code: '1SSP99AC100',
    description: 'SOLARSPEED 3.0 LANDSCAPE BACKPLATE 10°-12,5°-15° 2280MM',
    packagingUnit: 1,
    category: 'solarspeed',
  },

  // ===== EQUIPMENT RENTAL =====
  BOORMACHINE_HUUR: {
    code: '8ZZZBM99005',
    description: 'ELECTRISCH GEREEDSCHAP BOORMACHINE HUUR PER DAG',
    packagingUnit: 1,
    category: 'equipment',
  },
};

// Helper function to get product by key
export const getProduct = (key: string): Product | undefined => {
  return PRODUCTS[key];
};

// Helper function to calculate packaging (round up to packaging unit)
export const calculatePackaging = (required: number, packagingUnit: number): number => {
  if (required === 0) return 0;
  return Math.ceil(required / packagingUnit) * packagingUnit;
};

// Get roof hook product by hook type
export const getRoofHookProduct = (hookType: HookType): Product | undefined => {
  const hookProductMap: Record<HookType, string> = {
    [HOOK_TYPES.NORMAL]: 'DAKHAAK_NORMAL',
    [HOOK_TYPES.LONG]: 'DAKHAAK_LONG',
    [HOOK_TYPES.HYBRID]: 'DAKHAAK_HYBRID',
    [HOOK_TYPES.OPTIMUM]: 'DAKHAAK_OPTIMUM',
    [HOOK_TYPES.OPTI_CLASSIC]: 'DAKHAAK_OPTI_CLASSIC',
    [HOOK_TYPES.SLATES_NORMAL]: 'DAKHAAK_SLATES_NORMAL',
    [HOOK_TYPES.ZINC_ROUND]: 'DAKHAAK_ZINC_ROUND',
    [HOOK_TYPES.ZINC_STAND_SEAM]: 'DAKHAAK_ZINC_STAND_SEAM',
  };
  return PRODUCTS[hookProductMap[hookType]];
};

// Get profile product based on type and color
export const getProfileProduct = (profileType: ProfileType, color: ProfileColor): Product | undefined => {
  const key = profileType === PROFILE_TYPES.HOUSE
    ? (color === PROFILE_COLORS.ALU ? 'PROFIEL_HOUSE_6000_ALU' : 'PROFIEL_HOUSE_6000_BLACK')
    : (color === PROFILE_COLORS.ALU ? 'PROFIEL_FEATHER_6000_ALU' : 'PROFIEL_FEATHER_6000_BLACK');
  return PRODUCTS[key];
};

// Get profile connector based on color
export const getProfileConnector = (color: ProfileColor): Product => {
  return color === PROFILE_COLORS.ALU ? PRODUCTS.PROFIELVERBINDER_ALU : PRODUCTS.PROFIELVERBINDER_BLACK;
};

// Get middle clamp (klik system)
export const getMiddleClamp = (color: ProfileColor): Product => {
  return color === PROFILE_COLORS.ALU ? PRODUCTS.KLIKMIDDENKLEM_30_40_ALU : PRODUCTS.KLIKMIDDENKLEM_30_40_BLACK;
};

// Get end clamp based on thickness and color
export const getEndClamp = (thickness: number, color: ProfileColor): Product => {
  if (thickness <= 32) {
    return color === PROFILE_COLORS.ALU ? PRODUCTS.KLIKEINDKLEM_30_ALU : PRODUCTS.KLIKEINDKLEM_30_BLACK;
  } else {
    return color === PROFILE_COLORS.ALU ? PRODUCTS.KLIKEINDKLEM_35_ALU : PRODUCTS.KLIKEINDKLEM_35_BLACK;
  }
};

// Get end cap (sluitstop) based on color
export const getEndCap = (color: ProfileColor): Product => {
  return color === PROFILE_COLORS.ALU ? PRODUCTS.SLUITSTOP_ALU : PRODUCTS.SLUITSTOP_BLACK;
};
