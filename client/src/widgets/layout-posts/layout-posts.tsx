import { ReactNode } from 'react'
import { StateSettingsContextValues } from '@/shared/providers'
import { LAYOUT_COMPONENTS } from '@/widgets/layout-posts/libs'
import { LAYOUT_VARIANTS } from '@/entities/settings'

type LayoutPostsProps = {
  children: ReactNode
} & Partial<Pick<StateSettingsContextValues, 'rows' | 'columns' | 'layout'>>

export const LayoutPosts = ({
  children,
  columns = 1,
  rows = 1,
  layout = LAYOUT_VARIANTS.grid,
}: LayoutPostsProps) => {
  const Component = LAYOUT_COMPONENTS[layout]

  return (
    <Component
      columns={columns}
      rows={rows}
    >
      {children}
    </Component>
  )
}
