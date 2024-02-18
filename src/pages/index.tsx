import { useEffect, useState } from 'react';
import Navbar from '../components/nav';
import Layout from '../components/layout';
import { SanityPost } from '../utils/types';
import Image from 'next/image';
import CtaBox from '../components/email/cta-box';

type Props = {
  recentPosts: SanityPost[];
}

export default function Index({ recentPosts }: Props) {
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const year = now.getFullYear().toString().substr(-2);
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentDateTime(`${month}.${day}.${year} ${hours}.${minutes}.${seconds}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Layout>
      <Navbar className="sticky top-0" date={currentDateTime} home />

      <div className='flex flex-col justify-center h-[65vh] space-y-16'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <CtaBox />
        </div>
        <div className='grid grid-cols-4 w-full place-items-center'>
          <div>
            <Image src='/rorb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/borb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/sorb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/borb.png' height={175} width={175} alt='orb' />
          </div>
        </div>
        <div className='grid grid-cols-4 w-full place-items-center'>
          <div>
            <Image src='/borb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/sorb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/borb.png' height={175} width={175} alt='orb' />
          </div>
          <div>
            <Image src='/rorb.png' height={175} width={175} alt='orb' />
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}