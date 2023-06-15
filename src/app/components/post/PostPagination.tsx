import Link from 'next/link'

interface Props {
  totalPages: number
  currentPage?: number
}

const PostPagination = ({ totalPages, currentPage }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? 'text-slate-500 pointer-events-none'
            : 'text-indigo-600'
        }`}
      >
        Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={`/page/${index + 1}`}
          key={index}
          className={`${
            currentPage === index + 1
              ? 'text-slate-500 pointer-events-none'
              : 'text-indigo-600'
          }`}
        >
          {index + 1}
        </Link>
      ))}
      <Link
        href={`/page/${currentPage + 1}`}
        className={`${
          currentPage === totalPages
            ? 'text-slate-500 pointer-events-none'
            : 'text-indigo-600'
        }`}
      >
        Next
      </Link>
    </div>
  )
}

export default PostPagination