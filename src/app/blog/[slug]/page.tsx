import { useMDXComponent } from 'next-contentlayer/hooks'

import ButtonBack from '../../../components/ui/ButtonBack'
import Container from '../../../components/ui/Container'
import Content from '../../../components/ui/Content'

import NotFound from '../../not-found'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts } from 'contentlayer/generated'

interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)

  return {
    title: post?.title,
    description: post?.description
  }
}

const PostSlug = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  let MDXContent

  if (!post) {
    return <NotFound />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(post.body.code)
  }

  return (
    <Container>
      <Content>
        <h1 className="text-center text-2xl font-bold uppercase">
          {post.title}
        </h1>
        <div className="mb-8 text-center">
          <time className="text-gray-700">
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <MDXContent />
        <div className="mt-8 text-center">
          <ButtonBack>Voltar</ButtonBack>
        </div>
      </Content>
    </Container>
  )
}

export default PostSlug
