import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card.tsx'
import { ReactNode } from 'react'
import { TEMPLATE_VARIANTS, TemplateTypes } from '@/entities/settings'
import { cn } from '@/shared/libs'
import { ConditionalRender } from '@/shared/ui'

type CustomCardProps = {
  title: string
  titleDescription: ReactNode
  content: ReactNode
  footer: ReactNode
  variant: TemplateTypes
}

export const CustomCard = ({
  title,
  content,
  footer,
  titleDescription,
  variant,
}: CustomCardProps) => {
  return (
    <Card>
      <ConditionalRender condition={variant === TEMPLATE_VARIANTS.hover}>
        <CardContent className={cn({ 'pt-6': variant === 'hover' })}>{content}</CardContent>
      </ConditionalRender>

      <CardHeader className={cn({ 'border-b-0 border-t-1 pb-0': variant === 'hover' })}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{titleDescription}</CardDescription>
      </CardHeader>

      <ConditionalRender condition={variant === TEMPLATE_VARIANTS.classic}>
        <CardContent>{content}</CardContent>
      </ConditionalRender>

      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
