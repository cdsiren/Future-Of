import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-light tracking-wider 3xl:text-[130px] text-[60px] 3xl:max-w-6xl max-w-3xl mx-auto">
      {children}
    </h1>
  )
}

export default PostTitle
