import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-light tracking-wider text-[70px]">
      {children}
    </h1>
  )
}

export default PostTitle
