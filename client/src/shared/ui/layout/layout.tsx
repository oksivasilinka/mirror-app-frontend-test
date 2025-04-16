import { ReactNode, useState } from 'react'
import { Sidebar } from '@/shared/ui/sidebar'

export type ChildrenProps = {
  page: number
  setPage: (page: number) => void
}

type LayoutProps = {
  sidebar: (setPage: ChildrenProps['setPage']) => ReactNode
  children: (props: ChildrenProps) => ReactNode
}

export const Layout = ({ children, sidebar }: LayoutProps) => {
  const [page, setPage] = useState<number>(1)

  return (
    <div className={'h-full flex max-h-screen w-full'}>
      <Sidebar>{sidebar(setPage)}</Sidebar>
      <div className={'relative min-h-screen p-4 ml-[300px] w-full overflow-auto'}>
        {children({ page, setPage })}
      </div>
    </div>
  )
}
