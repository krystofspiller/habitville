import * as Slot from '@rn-primitives/slot'
import type { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '~/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva(
  'web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors',
  {
    variants: {
      variant: {
        default: '',
        h1: 'native:text-2xl text-2xl font-semibold leading-none tracking-tight',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type TextProps = SlottableTextProps & VariantProps<typeof textVariants>

const TextClassContext = React.createContext<string | undefined>(undefined)

const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext)
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        className={cn(
          'text-base text-foreground web:select-text',
          textVariants({ variant, className }),
          textClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = 'RNRText'

export { Text, TextClassContext }
