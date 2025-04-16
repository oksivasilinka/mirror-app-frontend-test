import { Button, ChildrenProps, Input, Spinner } from '@/shared/ui'
import { SettingsConfig } from '@/entities/settings'
import { useGetSettingsQuery } from '@/shared/api/settings'
import { useEffect } from 'react'
import { useStateSettingsContext } from '@/shared/providers'

type SidebarSettingsProps = Pick<ChildrenProps, 'setPage'>

export const SidebarSettings = ({ setPage }: SidebarSettingsProps) => {
  const { data, isFetching, refetch } = useGetSettingsQuery()

  const { setSettings } = useStateSettingsContext()

  useEffect(() => {
    if (data) {
      setSettings(data)
    }
  }, [data, isFetching, refetch, setSettings])

  if (isFetching) {
    return <Spinner color='white' />
  }

  const refetchHandler = () => {
    setPage(1)
    refetch()
  }

  return (
    <div className={'flex flex-col gap-2'}>
      <Button onClick={refetchHandler}>Обновить</Button>
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
