import PostItem from './PostItem'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from 'contentlayer/generated'

interface Props {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post._raw.flattenedPath} />
      ))}
    </>
  )
}

export default PostList
