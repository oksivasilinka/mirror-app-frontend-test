import { Button, Input } from '@/shared/ui'
import { SettingsConfig } from '@/entities/settings'
import { useGetSettingsQuery } from '@/shared/api/settings'

export const SidebarSettings = () => {
  const { data, isFetching } = useGetSettingsQuery()

  if (isFetching) return null
  return (
    <div className={'flex flex-col gap-2'}>
      <Button>Обновить</Button>
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
