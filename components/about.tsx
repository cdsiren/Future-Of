import Image from "next/image";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = (className: any) => {

  return <>
    <div className={`font-light p-8 w-full min-h-[83vh]`}>
      <div className="flex gap-8 items-center mb-12">
        <Image src="/pfp.png" height={60} width={60} alt="pfp" />
        <div className="text-[30px] pb-4">
          Charlie Durbin
          <div className="flex gap-4 text-lg">
            <a target="_blank" href="https://twitter.com/cdurbinxyz" className="hover:text-orange-400"><AiOutlineTwitter /></a>
            <a target="_blank" href="https://github.com/cdsiren" className="hover:text-orange-400"><AiFillGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/charlie-durbin-b88544131/" className="hover:text-orange-400"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>
      <p className="md:w-1/2">Currently building <a target="_blank" href="https://decent.xyz" className="hover:text-orange-400">decent.xyz</a>, premier NFT infra for L2's / high-throughput chains (& L1 but that's a less interesting set of problems & opportunities).  I started researching crypto in 2017 when I published some independent work on how Bitcoin was being used by Chinese citizens to <a target="_blank" href="https://github.com/cdsiren/capital-flight" className="hover:text-orange-400">circumvent capital controls</a>, but NFTs really pulled me into the space as a builder in 2021 when I co-founded Decent.</p>
      <p className="md:w-1/2 py-4">I'm particularly interested in trying to discover where NFTs create evergreen value.  I generally believe property rights are the right framework for evaluating NFTs and that the value they protect is an individual's contributions to an ecosystem.  I think of research areas here like a 3x3 grid with Application, Middleware, and Protocol layers as rows and Economics, Sociology, and Political Theory as columns - wildly broad but such are NFTs.  On this site, you'll find most of my work across this matrix.</p>
      <p>Check out my Twitter for scattered thoughts, LinkedIn for work & eduction history, and Github for experiments.</p>
    </div>
  </>
}

export default About;