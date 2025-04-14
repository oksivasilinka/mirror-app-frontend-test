import { ReactNode } from 'react'

type SidebarProps = {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className={'h-screen w-full max-w-[300px] bg-secondary-foreground p-4 flex flex-col'}>
      {children}
    </div>
  )
}
