import { useEffect, useState } from 'react';
import Navbar from '../components/nav';
import Layout from '../components/layout';

export default function Index() {
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
    <div className='relative'>
      <div id='navbar' className='absolute top-0 w-full'>
        <Navbar className="sticky top-0" date={currentDateTime} home />
      </div>
    </div>
    </Layout>
    </>
  )
}