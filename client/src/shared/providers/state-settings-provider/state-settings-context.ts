import { createContext, useContext } from 'react'
import { LayoutTypes, NavigationTypes, Settings, TemplateTypes } from '@/entities/settings'

type StateSettingsContextValues = {
  layout: LayoutTypes | undefined
  rows: number | undefined
  columns: number | undefined
  template: TemplateTypes | undefined
  navigation: NavigationTypes | undefined
  setSettings: (stateSettings: Settings) => void
}

export const StateSettingsContext = createContext<StateSettingsContextValues | null>(null)

export const useStateSettingsContext = () => {
  const context = useContext(StateSettingsContext)

  if (!context) throw new Error('State Settings Context no exist')

  return context
}
