export const getImageUrl = (path: string) => {
  const BASE_URL = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
  
  const oldSuffixPng = "-png";
  const newSuffixPng = ".png";
  const oldSuffixJpg = "-jpg";
  const newSuffixJpg = ".jpg";

  if (path.includes("image-")) {
    const parts = path.split("image-");
    if (parts.length <= 1) return "";
    if (path.endsWith(oldSuffixJpg)) {
      return `${BASE_URL}/${parts[1].replace(new RegExp(oldSuffixJpg + '$'), newSuffixJpg)}`;
    } else if ((path.endsWith(oldSuffixPng))) {
      return `${BASE_URL}/${parts[1].replace(new RegExp(oldSuffixPng + '$'), newSuffixPng)}`;  
    } else {
      return path;
    };
  };
};