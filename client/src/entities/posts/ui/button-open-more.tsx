import { Button } from '@/shared/ui'

type ButtonOpenMoreProps = {
  isFetching?: boolean
  openMorePosts: () => void
}

export const ButtonOpenMore = ({ isFetching, openMorePosts }: ButtonOpenMoreProps) => {
  return (
    <div className={'w-full flex justify-center p-6'}>
      <Button
        onClick={openMorePosts}
        disabled={isFetching}
      >
        Загрузить еще
      </Button>
    </div>
  )
}
