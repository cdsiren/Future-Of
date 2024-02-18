import { sanityClient } from "./sanity";

export async function getLinks(){
  const links = await sanityClient.fetch(`*[_type == "links"]`);

  return links;
}