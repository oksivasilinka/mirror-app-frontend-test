import { useState, type ReactNode } from 'react'

import { StateSettingsContext } from '@/shared/providers'
import { Settings } from '@/entities/settings'

type StateSettingsProviderProps = {
  children: ReactNode
}

export const StateSettingsProvider = ({ children }: StateSettingsProviderProps) => {
  const [stateSettings, setStateSettings] = useState<Settings | null>(null)

  const setSettings = (settings: Settings) => {
    setStateSettings(settings)
  }

  const layout = stateSettings?.layout.current
  const rows = layout && stateSettings?.layout.params[layout].rows
  const columns = layout && stateSettings?.layout.params[layout].columns
  const template = stateSettings?.template
  const navigation = stateSettings?.navigation

  return (
    <StateSettingsContext.Provider
      value={{ layout, rows, columns, template, navigation, setSettings }}
    >
      {children}
    </StateSettingsContext.Provider>
  )
}
