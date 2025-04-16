import { LAYOUT_VARIANTS } from '@/entities/settings'
import { GridLayout, MasonryLayout } from '@/widgets/layout-posts/ui'

export const LAYOUT_COMPONENTS = {
  [LAYOUT_VARIANTS.masonry]: MasonryLayout,
  [LAYOUT_VARIANTS.grid]: GridLayout,
} as const
