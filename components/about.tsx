import Image from "next/image";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {

  return <>
    <div className={`font-light p-8 w-full min-h-[83vh]`}>
      <div className="flex gap-8 items-center mb-12">
        <Image src="/pfp.png" height={60} width={60} alt="pfp" />
        <div className="text-[30px] pb-4">
          Charlie Durbin
          <div className="flex gap-4 text-lg">
            <a target="_blank" href="https://twitter.com/cdurbinxyz" className="hover:text-white hover:bg-black"><AiOutlineTwitter /></a>
            <a target="_blank" href="https://github.com/cdsiren" className="hover:text-white hover:bg-black"><AiFillGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/charlie-durbin-b88544131/" className="hover:text-white hover:bg-black"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
      <p className="md:w-1/2">Currently building <a target="_blank" href="https://decent.xyz" className={`underline`}>decent.xyz</a>, premier payments infra for Ethereum L2's / high-throughput chains (& Eth L1 but that's a less interesting set of problems & opportunities).  I started researching crypto in 2017, publishing independent work on how Bitcoin was being used by Chinese citizens to <a target="_blank" href="https://github.com/cdsiren/capital-flight" className={`underline`}>circumvent capital controls</a>.  My weekend hobby became my weekday career in 2021 when I taught myself to code to build full stack NFT applications.</p>
      <p className="md:w-1/2 py-4">In a prior life, I played professional lacrosse and won a world championship with the Cannons in 2020.</p>
      <p className="md:w-1/2 py-4">Most people believe crypto is an irreconcilably bad user experience and the only way to onboard users is by abstracting it completely.  The truth is that the unique properties of crypto (self-sovereign banking, borderless currencies, decentralized, instant settlement) actually enable unprecedentedly good UX.  If not already, The Box will deliver the smoothest payments experience ever built, and, by focusing on the point at which retail interacts with its money, we can make theoretical promises of DeFi a reality.  This matters because mass adoption of decentralized architectures will increase the world's productive capacity by mitigating cold start problems across a number of industries.</p>
      <p className="md:w-1/2 ">Check out my <a target="_blank" href="https://twitter.com/cdurbinxyz" className={`underline`}>Twitter</a> for quick thoughts, <a target="_blank" href="https://www.linkedin.com/in/charlie-durbin-b88544131/" className={`underline`}>LinkedIn</a> for work & eduction history, and <a target="_blank" href="https://github.com/cdsiren" className={`underline`}>Github</a> for experiments.</p>
    </div>
  </>
}

export default About;