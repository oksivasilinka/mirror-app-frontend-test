import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card.tsx'
import { ReactNode } from 'react'

type CustomCardProps = {
  title: string
  titleDescription: ReactNode
  content: ReactNode
  footer: ReactNode
}

export const CustomCard = ({ title, content, footer, titleDescription }: CustomCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{titleDescription}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
