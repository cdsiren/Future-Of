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
    const categoryId = post.categories[0]._ref;
    const categoryName = await cleanCategory(categoryId);
    const date = formatIsoDate(String(post.publishedAt));
    const image = getImageUrl(post.mainImage.asset._ref);

    return {
      ...post,
      categoryName,
      date,
      image,
    };
  }));

  setCleanPosts(postsWithCategories);
}

async function cleanCategory(id: string) {
  try {
    let res = await sanityClient.fetch(`*[_type == "category" && _id == $id]{title}`, { id });
    return res[0].title;
  } catch (e) {
    console.log("Error fetching category name.");
  }
};