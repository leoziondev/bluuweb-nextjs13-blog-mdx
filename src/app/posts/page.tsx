import PostList from '../components/post/PostList'
import Container from '../components/ui/Container'
import Content from '../components/ui/Content'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

const Posts = () => {
  return (
    <Container>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-6 mt-8">
        <PostList posts={posts} />
      </div>
    </Container>
  )
}

export default Posts
