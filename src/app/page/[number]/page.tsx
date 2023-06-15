import { notFound } from 'next/navigation'

import PostList from '../../../components/post/PostList'
import PostPagination from '../../../components/post/PostPagination'
import Container from '../../../components/ui/Container'

import { getPagination } from '../../../utils/pagination'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

interface Props {
  params: {
    number: string
  }
}

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map((_, index) => ({
    number: `${index + 1}`
  }))
}

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts
  let totalPagesNumber

  try {
    const { currentPosts, totalPages } = getPagination(posts, 2, params.number)
    arrayCurrentPosts = currentPosts
    totalPagesNumber = totalPages
  } catch (error) {
    notFound()
  }

  return (
    <Container>
      <h1 className="my-4 text-center text-3xl">Posts</h1>
      <div className="mt-8 grid gap-6">
        <PostList posts={arrayCurrentPosts} />
        {totalPagesNumber > 1 && (
          <PostPagination
            totalPages={totalPagesNumber}
            currentPage={parseInt(params.number)}
          />
        )}
      </div>
    </Container>
  )
}

export default LayoutPages
