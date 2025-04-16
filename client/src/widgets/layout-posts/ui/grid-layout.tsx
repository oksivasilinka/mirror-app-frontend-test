import { ReactNode } from 'react'
import { StateSettingsContextValues } from '@/shared/providers'

type GridLayoutProps = {
  children: ReactNode
} & Pick<StateSettingsContextValues, 'rows' | 'columns'>

export const GridLayout = ({ columns, rows, children }: GridLayoutProps) => {
  const columnsStyle = `repeat(${columns}, minmax(0, 1fr))`
  const rowsStyle = `repeat(${rows}, minmax(0, 1fr))`

  return (
    <div
      style={{
        gridTemplateColumns: columnsStyle,
        gridTemplateRows: rowsStyle,
        gridAutoFlow: 'dense',
      }}
      className={'gap-1 grid'}
    >
      {children}
    </div>
  )
}
