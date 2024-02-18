import { SanityPost } from "../utils/types";
import { getImageUrl } from "../lib/sanity/getImageUrl";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: SanityPost }) => {  
  return (
    <Link href={`/posts/${post.slug.current}`}>
      <Image className="rounded-sm hover:opacity-80" src={getImageUrl(post.mainImage.asset._ref)} objectFit="cover" layout="fill" alt='post' />
      <p className="absolute bottom-4 left-4 bg-black p-1 text-white text-2xl font-thin">{post.title}</p>
    </Link>
  )
}

export default PostCard;