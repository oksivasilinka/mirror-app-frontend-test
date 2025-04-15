import { ReactNode } from 'react'
import { Sidebar } from '@/shared/ui/sidebar'

type LayoutProps = {
  children: ReactNode
  sidebar: ReactNode
}
export const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <div className={'h-full flex max-h-screen w-full'}>
      <Sidebar>{sidebar}</Sidebar>
      <div className={'relative min-h-screen p-4 ml-[300px] w-full overflow-auto'}>{children}</div>
    </div>
  )
}
