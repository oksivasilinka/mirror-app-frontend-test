import { ReactNode } from 'react'
import { StateSettingsContextValues } from '@/shared/providers'
import { cn } from '@/shared/libs'
import { LAYOUT_VARIANTS } from '@/entities/settings'
import Masonry from 'react-layout-masonry'

type LayoutPostsProps = {
  children: ReactNode
} & Pick<StateSettingsContextValues, 'rows' | 'columns' | 'layout'>

export const LayoutPosts = ({ children, columns, rows, layout }: LayoutPostsProps) => {
  const columnsStyle = `repeat(${columns}, minmax(0, 1fr))`
  const rowsStyle = `repeat(${rows}, minmax(0, 1fr))`

  if (layout === LAYOUT_VARIANTS.masonry) {
    return (
      <Masonry
        columns={columns}
        gap={4}
      >
        {children}
      </Masonry>
    )
  }

  return (
    <div
      style={{
        gridTemplateColumns: columnsStyle,
        gridTemplateRows: rowsStyle,
        gridAutoFlow: 'dense',
      }}
      className={cn('gap-1', {
        grid: layout === LAYOUT_VARIANTS.grid,
      })}
    >
      {children}
    </div>
  )
}
