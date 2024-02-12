import Image from "next/image";
import { AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SanityAuthor } from "../utils/types";
import { getImageUrl } from "../lib/sanity/getImageUrl";
import { PortableText } from '@portabletext/react';
import components from "../lib/sanity/renderComponents";

const About = ({ author }: SanityAuthor) => {

  return <>
    <div className={`font-light p-8 max-w-[700px] min-h-[83vh]`}>
      <div className="flex gap-8 items-center mb-12">
        <Image src={getImageUrl(author.image.asset._ref)} height={60} width={60} alt={author.image.alt} />
        <div className="text-[30px] pb-4">
          {author.name}
          <div className="flex gap-4 text-lg">
            <a target="_blank" href={author.Twitter} className="hover:text-white hover:bg-black"><AiOutlineTwitter /></a>
            <a target="_blank" href={author.Instagram} className="hover:text-white hover:bg-black"><AiFillInstagram /></a>
            <a target="_blank" href={author.LinkedIn} className="hover:text-white hover:bg-black"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={author.bio as any} components={components as any} />
      </div>
    </div>
  </>
}

export default About;
