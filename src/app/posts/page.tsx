import Link from 'next/link'

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
      <Content>
        <h1 className="text-center my-4 text-3xl">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post._id}>
              <h2 className="text-2xl">
                <Link href={post.url}>{post.title}</Link>
              </h2>
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
      </Content>
    </Container>
  )
}

export default Posts
