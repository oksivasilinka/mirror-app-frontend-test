export type RowsAndColumns = {
  columns: number
  rows: number
}

export const LAYOUT_VARIANTS = {
  masonry: 'masonry',
  grid: 'grid',
} as const

export const TEMPLATE_VARIANTS = {
  classic: 'classic',
  hover: 'hover',
} as const

export const NAVIGATION_VARIANTS = {
  pagination: 'pagination',
  loadMore: 'load-more',
} as const

export type LayoutTypes = (typeof LAYOUT_VARIANTS)[keyof typeof LAYOUT_VARIANTS]
export type TemplateTypes = (typeof TEMPLATE_VARIANTS)[keyof typeof TEMPLATE_VARIANTS]
export type NavigationTypes = (typeof NAVIGATION_VARIANTS)[keyof typeof NAVIGATION_VARIANTS]

type Layout = Record<LayoutTypes, RowsAndColumns>

export type Settings = {
  layout: {
    current: LayoutTypes
    params: Layout
  }
  template: TemplateTypes
  navigation: NavigationTypes
}
