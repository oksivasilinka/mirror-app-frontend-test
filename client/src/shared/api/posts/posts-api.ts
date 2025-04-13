import { baseApi } from '../base-api.ts'
import { GetPostsPayload, GetPostsResponse } from './posts-types.ts'
import { PROVIDED_TAGS } from '@/shared/constants'

export const posts = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPosts: builder.query<GetPostsResponse, GetPostsPayload>({
        query: ({ page, limit }) => ({
          method: 'GET',
          url: `/posts?_expand=user&_page=${page}&_limit=${limit}`,
        }),
        providesTags: [PROVIDED_TAGS.posts],
      }),
    }
  },
})

export const { useGetPostsQuery } = posts
