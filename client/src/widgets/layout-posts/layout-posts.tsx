import { ReactNode } from 'react'
import { StateSettingsContextValues } from '@/shared/providers'
import { LAYOUT_COMPONENTS } from '@/widgets/layout-posts/libs'

type LayoutPostsProps = {
  children: ReactNode
} & Pick<StateSettingsContextValues, 'rows' | 'columns' | 'layout'>

export const LayoutPosts = ({ children, columns, rows, layout }: LayoutPostsProps) => {
  if (!layout) {
    return null
  }

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
