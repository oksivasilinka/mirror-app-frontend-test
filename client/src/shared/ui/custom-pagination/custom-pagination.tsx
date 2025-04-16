import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/shared/ui/pagination.tsx'
import { usePagination } from '@/shared/hooks'
import { DOTS } from '@/shared/constants'
import { ChildrenProps, ConditionalRender } from '@/shared/ui'

type CustomPaginationProps = {
  pageSize?: number
} & ChildrenProps

export const CustomPagination = ({ pageSize, page, setPage }: CustomPaginationProps) => {
  const { pagination } = usePagination({ pageSize, currentPage: page })

  return (
    <Pagination className={'p-6'}>
      <PaginationContent>
        {pagination?.map((el, i) => (
          <PaginationItem key={i}>
            <ConditionalRender condition={el === DOTS}>
              <PaginationEllipsis />
            </ConditionalRender>

            {el !== DOTS && (
              <PaginationLink
                onClick={() => setPage(el)}
                isActive={page === el}
              >
                {el}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
