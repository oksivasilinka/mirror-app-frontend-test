import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PROVIDED_TAGS } from '@/shared/constants'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [PROVIDED_TAGS.posts],
})
