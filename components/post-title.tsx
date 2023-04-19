import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-light tracking-wider text-[60px] max-w-3xl mx-auto">
      {children}
    </h1>
  )
}

export default PostTitle
