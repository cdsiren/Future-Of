export function contractType(type:string) {
  const typeIndex = [
    ["DCNT721A", "DCNT4907A", "DCNTCrescendo", "DCNTVault", "DCNTStaking", "ZKEdition", "DCNTSoulBound"],
    ["Editions", "Rentable", "Crescendo", "Treasury", "Staking", "Editions", "Editions"]
  ];
  const active = typeIndex[0].indexOf(type);
  const contractType = typeIndex[1][active];

  return contractType;
}