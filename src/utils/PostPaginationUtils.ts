// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))

const totalPosts = posts.length
const postsPerPage = 2
export const totalPages = Math.ceil(totalPosts / postsPerPage)

export const getPostsPagination = (currentPage = 1) => {
  if (currentPage > totalPages) {
    throw new Error(`Page ${currentPage} does not exist`)
  }

  const offset = (currentPage - 1) * postsPerPage
  const currentPosts = posts.slice(offset, offset + postsPerPage)

  return {
    currentPosts
  }
}
