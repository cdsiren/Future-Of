export const getImageUrl = (path:string) => {
  const BASE_URL = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
  const prefix = "image-";
  const suffix = "-png";
  const newSuffix = ".png";

  const parts = path.split(prefix);
  if (parts.length <= 1) return "";

  return `${BASE_URL}/${parts[1].replace(new RegExp(suffix + '$'), newSuffix)}`;
}