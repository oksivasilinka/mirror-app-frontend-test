import { Post } from '@/features/posts/ui'
import { useGetPostsQuery } from '@/shared/api/posts'
import { useStateSettingsContext } from '@/shared/providers'
import { getLimitPosts } from '@/shared/helpers'
import { NAVIGATION_VARIANTS } from '@/entities/settings'
import { Button } from '@/shared/ui'
import { useEffect, useState } from 'react'
import { Post as PostType } from '@/entities/posts'

export const Posts = () => {
  const { rows, columns, template, navigation } = useStateSettingsContext()
  const [page, setPage] = useState(1)

  const limit = rows && columns && getLimitPosts(rows, columns)

  const { data, isFetching } = useGetPostsQuery(
    { page, limit: `${limit}` },
    { skip: !columns || !rows },
  )
  const [allPosts, setAllPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (data) {
      setAllPosts((prevPosts) => [...prevPosts, ...data])
    }
  }, [data])

  const openMorePosts = () => {
    setPage((prev) => prev + 1)
  }

  if (isFetching && page === 1) return null

  return (
    <>
      {allPosts.map((post) => (
        <Post
          variant={template}
          username={post?.user?.username ?? post.userId}
          key={post.id}
          {...post}
        />
      ))}
      {navigation === NAVIGATION_VARIANTS.loadMore && (
        <div className={'w-full flex justify-center p-6'}>
          <Button
            onClick={openMorePosts}
            disabled={isFetching}
          >
            Загрузить еще
          </Button>
        </div>
      )}
    </>
  )
}
