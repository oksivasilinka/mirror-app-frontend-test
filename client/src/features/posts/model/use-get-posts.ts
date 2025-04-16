import { StateSettingsContextValues, useStateSettingsContext } from '@/shared/providers'
import { useEffect, useState } from 'react'
import { getLimitPosts } from '@/shared/helpers'
import { useGetPostsQuery } from '@/shared/api/posts'
import { Post as PostType } from '@/entities/posts'
import { NAVIGATION_VARIANTS } from '@/entities/settings'
import { ChildrenProps } from '@/shared/ui'

type UseGetPostsArgs = ChildrenProps

type UseGetPostsReturn = Partial<Omit<StateSettingsContextValues, 'setSettings'>> & {
  isFetching?: boolean
  openMorePosts: () => void
  allPosts: PostType[]
  limit?: number
}

export const useGetPosts = ({ page, setPage }: UseGetPostsArgs): UseGetPostsReturn => {
  const { rows, columns, layout, navigation, template } = useStateSettingsContext()

  const [allPosts, setAllPosts] = useState<PostType[]>([])

  const limit = rows && columns && getLimitPosts(rows, columns)

  const { data, isFetching } = useGetPostsQuery(
    { page, limit: `${limit}` },
    { skip: !columns || !rows },
  )
  useEffect(() => {
    if (!data) {
      return
    }
    if (navigation === NAVIGATION_VARIANTS.loadMore && page !== 1) {
      setAllPosts((prev) => [...prev, ...data])
    } else {
      setAllPosts([...data])
    }
  }, [data])

  const openMorePosts = () => {
    setPage(page + 1)
  }

  return {
    isFetching,
    openMorePosts,
    allPosts,
    rows,
    columns,
    layout,
    template,
    navigation,
    limit,
  }
}
