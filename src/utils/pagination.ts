const isNumber = (value: string) => !/^\d+$/.test(value)

export const getPagination = <T>(
  items: T[],
  postsPerPage = 2,
  currentPage = '1'
) => {
  if (!isNumber(currentPage)) {
    throw new Error('Invalid page number')
  }

  const currentPageInt = parseInt(currentPage, 10)
  const totalPosts = items.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  if (currentPageInt > totalPages) {
    throw new Error(`Page ${currentPageInt} does not exist`)
  }

  const offset = (currentPageInt - 1) * postsPerPage
  const currentPosts = items.slice(offset, offset + postsPerPage)

  return {
    currentPosts,
    totalPages
  }
}
