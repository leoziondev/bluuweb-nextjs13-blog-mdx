import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from 'contentlayer/generated'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  return (
    <article className="bg-white rounded-md hover:shadow-md transition-all ease-in-out duration-300 p-8">
      <h2 className="text-2xl">
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time className="text-xs">
        {new Date(post.date).toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
    </article>
  )
}

export default PostItem
