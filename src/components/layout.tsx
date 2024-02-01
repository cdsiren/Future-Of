import Meta from './meta';
import { useScreenSize } from '../lib/contexts/useScreenSizeContext';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { type } = useScreenSize();

  return (
    <>
      <Meta />
      <div className={`${type === 'mobile' && ' bg-black text-white'} min-h-screen relative`}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
