import PostList from '../../components/post/PostList'
import Container from '../../components/ui/Container'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

interface Props {
  params: {
    number: string
  }
}

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

const totalPosts = posts.length
const postsPerPage = 2
const totalPages = Math.ceil(totalPosts / postsPerPage)

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

const LayoutPages = ({ params }: Props) => {
  const currentPage = parseInt(params.number)
  const offset = (currentPage - 1) * postsPerPage
  const currentPost = posts.slice(offset, offset + postsPerPage)

  return (
    <Container>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-6 mt-8">
        <PostList posts={currentPost} />
      </div>
    </Container>
  )
}

export default LayoutPages
