import { format, formatDistanceToNow, differenceInHours } from 'date-fns'
import { ru } from 'date-fns/locale'
import { DATE_FORMAT } from '@/shared/constants'

type TimeProps = {
  date: string
}

export const Time = ({ date }: TimeProps) => {
  const currentDate = new Date()

  const formattedDate = format(date, DATE_FORMAT)

  const roundedDiff = differenceInHours(currentDate, date)

  return (
    <time>
      {roundedDiff > 24
        ? formatDistanceToNow(date, { addSuffix: true, locale: ru })
        : formattedDate}
    </time>
  )
}
