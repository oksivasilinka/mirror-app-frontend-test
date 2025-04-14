import { baseApi } from '../base-api.ts'
import { GetSettingsPayload, GetSettingsResponse } from './settings-types.ts'
import { PROVIDED_TAGS } from '@/shared/constants'

export const settings = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getSettings: builder.query<GetSettingsResponse, GetSettingsPayload>({
        query: () => ({
          method: 'GET',
          url: `/settings`,
        }),
        providesTags: [PROVIDED_TAGS.settings],
      }),
    }
  },
})

export const { useGetSettingsQuery } = settings
