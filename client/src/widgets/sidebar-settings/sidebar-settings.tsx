import { Button, Input } from '@/shared/ui'
import { SettingsConfig } from '@/entities/settings'
import { useGetSettingsQuery } from '@/shared/api/settings'
import { useEffect } from 'react'
import { useStateSettingsContext } from '@/shared/providers'
import { ClipLoader } from 'react-spinners'

export const SidebarSettings = () => {
  const { data, isFetching, refetch } = useGetSettingsQuery()

  const { setSettings } = useStateSettingsContext()

  useEffect(() => {
    if (data) {
      setSettings(data)
    }
  }, [data, isFetching, refetch, setSettings])

  if (isFetching) {
    return (
      <ClipLoader
        color={'white'}
        className={'w-full h-full m-auto'}
      />
    )
  }

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
