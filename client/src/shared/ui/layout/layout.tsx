import { ReactNode } from 'react'
import { Sidebar } from '@/shared/ui/sidebar'

type LayoutProps = {
  children: ReactNode
  sidebar: ReactNode
}
export const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <div className={'h-full w-full flex max-w-screen'}>
      <Sidebar>{sidebar}</Sidebar>
      <div className={'p-4'}>{children}</div>
    </div>
  )
}
