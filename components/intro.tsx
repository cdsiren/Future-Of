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
    <section className="md:text-[70px] text-[48px] font-light tracking-wider leading-[70px] p-8">
      <h1>
        Charlie<br></br> Work
      </h1>
      <div className="pt-8">
        <p>website,</p>
        <p>{props.dimensions.width} x {props.dimensions.height} px,</p>
        <p className="break-all"><a className={props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://hq.decent.xyz/${props.nft.chainId}/${contractType(props.nft.type)}/${props.nft.address}`} target="_blank">{props.loading ? "..." : props.nft.chainId+"."+props.nft.type+"."+formatAddress(props.nft.address)},</a></p>
        <p><a className={props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} href={`https://etherscan.io/block/${props.block}`} target="_blank">{props.block} {maybeMorning} {`{revalidate: 12}`},</a></p>
        <p>New York, NY</p>
      </div>
    </section>
  )
}

export default Intro;