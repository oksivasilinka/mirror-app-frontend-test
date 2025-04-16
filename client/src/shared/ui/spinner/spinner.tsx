import { ClipLoader } from 'react-spinners'

type SpinnerProps = {
  color?: string
}

export const Spinner = ({ color }: SpinnerProps) => {
  return (
    <div className={'h-full flex items-center justify-center'}>
      <ClipLoader color={color} />
    </div>
  )
}
