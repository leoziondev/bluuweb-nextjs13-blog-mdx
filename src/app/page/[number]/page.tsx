import { notFound } from 'next/navigation'

import PostList from '../../components/post/PostList'
import PostPagination from '../../components/post/PostPagination'
import Container from '../../components/ui/Container'

import {
  getPostsPagination,
  totalPages
} from '../../../utils/PostPaginationUtils'

interface Props {
  params: {
    number: string
  }
}

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPostsPage

  try {
    if (!/^\d+$/.test(params.number)) {
      throw new Error('Invalid page number')
    }
    const currentPage = parseInt(params.number)
    arrayCurrentPostsPage = getPostsPagination(currentPage).currentPosts
  } catch (error) {
    notFound()
  }

  return (
    <Container>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-6 mt-8">
        <PostList posts={arrayCurrentPostsPage} />
        <PostPagination
          totalPages={totalPages}
          currentPage={parseInt(params.number)}
        />
      </div>
    </Container>
  )
}

export default LayoutPages
