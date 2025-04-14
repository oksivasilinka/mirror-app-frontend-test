import { getValue, Settings } from '@/entities/settings'

export const LayoutConfig = {
  masonry: 'Плиточная верстка',
  grid: 'Сетка',
}

export const TemplateConfig = {
  hover: 'Наведения',
  classic: 'Классическая',
}

export const NavigationConfig = {
  'load-more': "Кнопка 'Загрузить еще'",
  pagination: 'Пагинация',
}

export const SettingsConfig = (data?: Settings) => [
  { label: 'Шаблон (макет)', name: 'layout', value: getValue(LayoutConfig, data?.layout?.current) },
  { label: 'Карточка', name: 'template', value: getValue(TemplateConfig, data?.template) },
  { label: 'Навигация', name: 'navigation', value: getValue(NavigationConfig, data?.navigation) },
  {
    label: 'Колонок',
    name: 'columns',
    value: `${data?.layout?.params[data?.layout?.current]?.columns}`,
  },
  { label: 'Рядов', name: 'rows', value: `${data?.layout?.params[data?.layout?.current]?.rows}` },
]
