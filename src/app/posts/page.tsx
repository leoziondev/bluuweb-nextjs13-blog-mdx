import PostList from '../components/post/PostList'
import PostPagination from '../components/post/PostPagination'
import Container from '../components/ui/Container'

import { getPostsPagination, totalPages } from '../../utils/PostPaginationUtils'

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

const Posts = () => {
  const { currentPosts } = getPostsPagination()

  return (
    <Container>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-6 mt-8">
        <PostList posts={currentPosts} />
        <PostPagination totalPages={totalPages} />
      </div>
    </Container>
  )
}

export default Posts
