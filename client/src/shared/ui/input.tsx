import * as React from 'react'

import { cn } from '@/shared/libs/utils'
import { Label } from '@radix-ui/react-label'

type InputProps = React.ComponentProps<'input'> & {
  label: string
  value?: string
}

function Input({ className, type, label, name, value, ...props }: InputProps) {
  return (
    <div className='grid w-full text-input max-w-sm items-center gap-1.5'>
      <Label
        className={'text-input text-sm'}
        htmlFor={name}
      >
        {label}
      </Label>
      <input
        type={type}
        data-slot='input'
        id={name}
        value={value}
        className={cn(
          'file:text-input placeholder:text-input selection:bg-primary selection:text-input dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
