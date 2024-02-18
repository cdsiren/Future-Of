import { SanityPost, CleanSanityPost } from "../../utils/types";
import { sanityClient } from "./sanity";
import { formatIsoDate } from "../formats/formatDate";
import { getImageUrl } from "./getImageUrl";

export async function getCleanSanity({
  posts,
  setCleanPosts
}:{
  posts: SanityPost[],
  setCleanPosts: React.Dispatch<React.SetStateAction<CleanSanityPost[]>>
}){

  const postsWithCategories = await Promise.all(posts.map(async (post) => {
    const pubId = post.publication[0]._ref;
    const { name, url } = await cleanPublication(pubId);
    const date = formatIsoDate(String(post.publishedAt));
    const image = getImageUrl(post.mainImage.asset._ref);

    return {
      ...post,
      publication: {
        name, 
        url
      },
      date,
      image,
    };
  }));

  setCleanPosts(postsWithCategories);
}

async function cleanPublication(id: string) {
  try {
    let res = await sanityClient.fetch(`*[_type == "publication" && _id == $id]`, { id });
    return {
      name: res[0].name,
      url: res[0].url
    };
  } catch (e) {
    console.log("Error fetching pub name.");
  }
};