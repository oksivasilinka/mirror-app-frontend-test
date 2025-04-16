import { ReactNode } from 'react'

type ConditionalRenderProps = {
  condition?: unknown
  children: ReactNode
}

export const ConditionalRender = ({ condition, children }: ConditionalRenderProps) => {
  if (!condition) {
    return null
  }

  return <>{children}</>
}
