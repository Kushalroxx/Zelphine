import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui' // Make sure this path is correct

export default function PaginationForBlog({
  page,
  noOfPages,
}: {
  page: number
  noOfPages: number
}) {

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = []

    pages.push(page)

    if (page > 1) {
      pages.unshift(page - 1)
    }

    if (page < noOfPages) {
      pages.push(page + 1)
    }

    if (page > 3) {
      pages.unshift('ellipsis')
    }
    if (page > 2) {
      pages.unshift(1)
    }

    if (page < noOfPages - 2) {
      pages.push('ellipsis')
    }
    if (page < noOfPages - 1) {
      pages.push(noOfPages)
    }

    return [...new Set(pages)]
  }

  const isPrevDisabled = page === 1
  const isNextDisabled = page === noOfPages || noOfPages === 0

  return (
    <Pagination className="my-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={isPrevDisabled ? '#' : `/blogs?page=${page - 1}`}
            aria-disabled={isPrevDisabled}
            className={
              isPrevDisabled ? 'pointer-events-none opacity-50' : ''
            }
            tabIndex={isPrevDisabled ? -1 : undefined}
          />
        </PaginationItem>

        {getPageNumbers().map((e, i) =>
          e === 'ellipsis' ? (
            <PaginationItem key={i}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={i}>
              <PaginationLink isActive={page === e} href={`/blogs?page=${e}`}>
                {e}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href={isNextDisabled ? '#' : `/blogs?page=${page + 1}`}
            aria-disabled={isNextDisabled}
            className={
              isNextDisabled ? 'pointer-events-none opacity-50' : ''
            }
            tabIndex={isNextDisabled ? -1 : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}