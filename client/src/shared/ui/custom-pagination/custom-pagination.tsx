import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/shared/ui/pagination.tsx'
import { usePagination } from '@/shared/hooks'
import { DOTS } from '@/shared/constants'

type CustomPaginationProps = {
  currentPage: number
  pageSize?: number
  setPage: (page: number) => void
}

export const CustomPagination = ({ pageSize = 1, currentPage, setPage }: CustomPaginationProps) => {
  const { pagination } = usePagination({ pageSize, currentPage })

  return (
    <Pagination>
      <PaginationContent>
        {pagination?.map((el, i) => {
          return (
            <PaginationItem key={i}>
              {el === DOTS && <PaginationEllipsis />}
              {el !== DOTS && (
                <PaginationLink
                  onClick={() => setPage(el)}
                  isActive={currentPage === el}
                >
                  {el}
                </PaginationLink>
              )}
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}
