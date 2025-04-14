import { ReactNode } from 'react'

type SidebarProps = {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div
      className={
        'h-screen fixed top-0 bottom-0 w-full max-w-[300px] bg-secondary-foreground p-4 flex flex-col'
      }
    >
      {children}
    </div>
  )
}
