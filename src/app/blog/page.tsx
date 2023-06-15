import PostList from '../../components/post/PostList'
import PostPagination from '../../components/post/PostPagination'
import Container from '../../components/ui/Container'

import { getPagination } from '../../utils/pagination'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

const Posts = () => {
  const { currentPosts, totalPages } = getPagination(posts)

  return (
    <Container>
      <div className="mt-8 grid gap-6">
        <PostList posts={currentPosts} />
        {totalPages > 1 && <PostPagination totalPages={totalPages} />}
      </div>
    </Container>
  )
}

export default Posts
