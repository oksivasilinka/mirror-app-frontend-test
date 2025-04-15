import { useMemo } from 'react'
import { DOTS, MAX_VISIBLE_PAGES, SIBLING_COUNT, TOTAL_ELEMENTS } from '@/shared/constants'

type UsePaginationArgs = {
  currentPage: number
  pageSize: number
}

type UsePaginationReturn = {
  pagination: (typeof DOTS | number)[]
}

export const usePagination = ({
  pageSize,
  currentPage,
}: UsePaginationArgs): UsePaginationReturn => {
  const totalPages = Math.floor(TOTAL_ELEMENTS / pageSize)

  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const paginationRange = useMemo(() => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1)
    const rightSiblingIndex = Math.min(currentPage + SIBLING_COUNT, totalPages)

    const shouldShowLeftDots = currentPage > 3
    const shouldShowRightDots = currentPage < totalPages - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 5)
      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - 4, totalPages)
      return [1, DOTS, ...rightRange]
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [1, DOTS, ...middleRange, DOTS, totalPages]
  }, [totalPages, currentPage])

  return { pagination: paginationRange }
}
