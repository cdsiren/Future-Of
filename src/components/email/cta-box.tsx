import EmailCapture from "./email-capture";
import { useScreenSize } from "../../lib/contexts/useScreenSizeContext";

const CtaBox = () => {
  const { type } = useScreenSize();

  return <>
    <div className={`${type === 'mobile' ? 'bg-black text-white border-white': 'bg-white border-black'} border px-20 py-8 w`}>
      <p className="text-xl font-thin py-1 text-center">Test the Future Of ___________.</p>
      <p className="text-3xl py-1 text-center">Get Rewarded.</p>
      
      <div className="pt-8 space-y-2">
        <EmailCapture className={`${type === 'mobile' ? 'bg-white text-black' : 'bg-black text-white'} rounded-full text-sm p-1`} />
        <div className="flex justify-center">
          <p className={`${type === 'mobile' && 'text-white'} text-xs font-bold p-1 text-center w-fit`}>Join the waitlist.</p>
        </div>
      </div>
    </div>
  </>
}

export default CtaBox;