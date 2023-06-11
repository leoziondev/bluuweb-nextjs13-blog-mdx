// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.id}>
            <h2 className="text-2xl">{post.title}</h2>
            <time className="text-xs">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Posts
