import { useMDXComponent } from 'next-contentlayer/hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts } from 'contentlayer/generated'

interface Props {
  params: {
    slug: string
  }
}

const PostSlug = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  let MDXContent

  if (!post) {
    return <div>Post not found</div>
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(post.body.code)
  }

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">{post.title}</h1>
      <time className="text-xs">
        {new Date(post.date).toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <MDXContent />
    </div>
  )
}

export default PostSlug
