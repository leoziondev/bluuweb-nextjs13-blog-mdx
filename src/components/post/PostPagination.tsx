import Link from 'next/link'

interface Props {
  totalPages: number
  currentPage?: number
}

const PostPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? 'pointer-events-none text-slate-500'
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
              ? 'pointer-events-none text-slate-500'
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
            ? 'pointer-events-none text-slate-500'
            : 'text-indigo-600'
        }`}
      >
        Next
      </Link>
    </div>
  )
}

export default PostPagination
