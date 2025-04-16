import Masonry from 'react-layout-masonry'
import { ReactNode } from 'react'
import { StateSettingsContextValues } from '@/shared/providers'

type MasonryLayoutProps = {
  children: ReactNode
} & Pick<StateSettingsContextValues, 'rows' | 'columns'>

export const MasonryLayout = ({ columns, children }: MasonryLayoutProps) => {
  return (
    <Masonry
      columns={columns}
      gap={4}
    >
      {children}
    </Masonry>
  )
}
