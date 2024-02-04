import Image from "next/image";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {

  return <>
    <div className={`font-light p-8 w-full min-h-[83vh]`}>
      <div className="flex gap-8 items-center mb-12">
        <Image src="/jbpfp.png" height={60} width={60} alt="pfp" />
        <div className="text-[30px] pb-4">
          Jackie Berardo
          <div className="flex gap-4 text-lg">
            <a target="_blank" href="https://twitter.com/jackieberardo" className="hover:text-white hover:bg-black"><AiOutlineTwitter /></a>
            <a target="_blank" href="https://github.com/cdsiren" className="hover:text-white hover:bg-black"><AiFillGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/charlie-durbin-b88544131/" className="hover:text-white hover:bg-black"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
      <p className="md:w-1/2">Currently building <a target="_blank" href="https://decent.xyz" className={`underline`}>decent.xyz</a>, premier payments infra for Ethereum L2's / high-throughput chains (& Eth L1 but that's a less interesting set of problems & opportunities).  I started researching crypto in 2017, publishing independent work on how Bitcoin was being used by Chinese citizens to <a target="_blank" href="https://github.com/cdsiren/capital-flight" className={`underline`}>circumvent capital controls</a>.</p>
      <p className="md:w-1/2 py-4">In a prior life, I played professional lacrosse and won a world championship with the Cannons in 2020</p>
      <p className="md:w-1/2 ">Check out my <a target="_blank" href="https://twitter.com/cdurbinxyz" className={`underline`}>Twitter</a> for quick thoughts, <a target="_blank" href="https://www.linkedin.com/in/charlie-durbin-b88544131/" className={`underline`}>LinkedIn</a> for work & eduction history, and <a target="_blank" href="https://github.com/cdsiren" className={`underline`}>Github</a> for experiments.</p>
    </div>
  </>
}

export default About;
