import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  className: string
}

const PostBody = ({ content, className }: Props) => {
  return (
    <div className={`${className} mx-auto font-light`}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
