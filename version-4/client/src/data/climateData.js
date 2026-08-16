// countries.dev does not provide climate, so we work it out ourselves.
//
// The base rule in getClimate.js is latitude: the further a country sits from the
// equator, the colder its band. Latitude alone can't see *dryness* though, so a
// desert country like Egypt would be mislabelled "tropical" purely for being close
// to the equator. This file is the override list for the countries where the
// latitude rule gets it wrong.
//
// These are broad browsing categories, not authoritative climatology. Big countries
// span several zones; we record the one that covers most of the land.

export const CLIMATE_ZONES = [
  "tropical",
  "arid",
  "temperate",
  "continental",
  "polar",
];

const CLIMATE_OVERRIDES = {
  // North Africa and the Sahara — hot desert, too far from the equator for the
  // tropical band but far too dry for the temperate one
  DZA: "arid",
  EGY: "arid",
  LBY: "arid",
  MAR: "arid",
  TUN: "arid",
  ESH: "arid",
  MRT: "arid",
  MLI: "arid",
  NER: "arid",
  TCD: "arid",
  SDN: "arid",
  CPV: "arid",

  // Horn of Africa
  DJI: "arid",
  ERI: "arid",
  SOM: "arid",

  // Southern Africa
  BWA: "arid",
  NAM: "arid",
  ZAF: "arid",

  // Middle East
  SAU: "arid",
  ARE: "arid",
  OMN: "arid",
  QAT: "arid",
  KWT: "arid",
  BHR: "arid",
  YEM: "arid",
  JOR: "arid",
  IRQ: "arid",
  IRN: "arid",
  ISR: "arid",
  PSE: "arid",
  SYR: "arid",

  // Central and South Asia
  AFG: "arid",
  PAK: "arid",
  TKM: "arid",
  UZB: "arid",
  KAZ: "arid",
  MNG: "arid",
  TJK: "continental",
  KGZ: "continental",

  // Australia — the interior is desert, which the latitude rule can't detect
  AUS: "arid",

  // Mexico is mostly desert and highland rather than tropical
  MEX: "arid",

  // Warm and wet despite sitting just outside the tropical latitude band
  BHS: "tropical",
  BGD: "tropical",
  TWN: "tropical",
  PCN: "tropical",

  // Maritime countries kept mild by the ocean, so "continental" would overstate
  // how cold their winters actually get
  GBR: "temperate",
  IRL: "temperate",
  IMN: "temperate",
  NLD: "temperate",
  BEL: "temperate",
  LUX: "temperate",
  DEU: "temperate",
  DNK: "temperate",
  CZE: "temperate",
  FRO: "temperate",

  // Subpolar islands and the far south — cold year round, low latitude bands
  // would not catch all of these
  ISL: "polar",
  FLK: "polar",
  SGS: "polar",
  ATF: "polar",
  HMD: "polar",
  BVT: "polar",
  SPM: "continental",
};

export default CLIMATE_OVERRIDES;
