import { Button, Input } from '@/shared/ui'
import { SettingsConfig } from '@/entities/settings'
import { useGetSettingsQuery } from '@/shared/api/settings'
import { useEffect } from 'react'
import { useStateSettingsContext } from '@/shared/providers'

export const SidebarSettings = () => {
  const { data, isFetching, refetch } = useGetSettingsQuery()

  const { setSettings } = useStateSettingsContext()

  useEffect(() => {
    if (data && !isFetching) {
      setSettings(data)
    }
  }, [data, isFetching, refetch])

  if (isFetching) return null

  return (
    <div className={'flex flex-col gap-2'}>
      <Button onClick={refetch}>Обновить</Button>
      {SettingsConfig(data).map((input) => {
        return (
          <Input
            key={input.name}
            {...input}
          />
        )
      })}
    </div>
  )
}
