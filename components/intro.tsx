import formatAddress from "../lib/formatAddress";
import { contractType } from "../lib/contractType";

const Intro = (props: any) => {

  const rn = new Date();
  const hours = rn.getHours();
  let maybeMorning: string;
  if (hours < 12) {
    maybeMorning = 'am'
  } else {
    maybeMorning = 'pm';
  }

  return (
    <section className={`${props.dimensions.height >= 1050 ? "md:leading-[190px] md:text-[190px] sm:text-[115] sm:leading-[115px] leading-[54px] text-[54px]" : props.dimensions.height >= 780 ? "md:leading-[80px] md:text-[80px] sm:text-[78px] leading-[54px] text-[54px]" : "md:leading-[70px] md:text-[70px] leading-[54px] text-[54px]"} font-light tracking-wider p-8 min-h-screen flex flex-col justify-between`}>
      <h1>
        Charlie<br></br> Work
      </h1>
      <div className="flex items-center">
        <div>
          <p className="hidden sm:inline-block">desktop,</p><p className="sm:hidden">mobile,</p>
          <p>{props.dimensions.width} x {props.dimensions.height} px,</p>
          <p className="break-all"><a className={props.dimensions.width <= 785 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://hq.decent.xyz/${props.nft.chainId}/${contractType(props.nft.type)}/${props.nft.address}`} target="_blank">{props.loading ? "..." : props.nft.chainId+"."+props.nft.type+"."+formatAddress(props.nft.address)},</a></p>
          <p><a className={props.dimensions.width <= 785 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://etherscan.io/block/${props.block}`} target="_blank">{props.block} {maybeMorning} {`{revalidate: 12}`},</a></p>
          <p>New York, NY</p>
        </div>
      </div>
      <div className="pb-16"></div>
    </section>
  )
}

export default Intro;