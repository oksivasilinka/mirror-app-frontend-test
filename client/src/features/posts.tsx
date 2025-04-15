import { Post } from '@/features/posts/ui'
import { useGetPostsQuery } from '@/shared/api/posts'
import { useStateSettingsContext } from '@/shared/providers'
import { getLimitPosts } from '@/shared/helpers'
import { NAVIGATION_VARIANTS } from '@/entities/settings'
import { Button } from '@/shared/ui'
import { useEffect, useState } from 'react'
import { Post as PostType } from '@/entities/posts'
import { CustomPagination } from '@/shared/ui/custom-pagination'
import { LayoutPosts } from '@/widgets/layout-posts/layout-posts.tsx'
import { TOTAL_ELEMENTS } from '@/shared/constants'
import { ClipLoader } from 'react-spinners'

export const Posts = () => {
  const { rows, columns, template, navigation, layout } = useStateSettingsContext()
  const [page, setPage] = useState(1)

  const limit = rows && columns && getLimitPosts(rows, columns)

  const { data, isFetching } = useGetPostsQuery(
    { page, limit: `${limit}` },
    { skip: !columns || !rows },
  )
  const [allPosts, setAllPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (data && navigation === NAVIGATION_VARIANTS.loadMore) {
      setAllPosts((prevPosts) => [...prevPosts, ...data])
    }
    if (data && navigation !== NAVIGATION_VARIANTS.loadMore) {
      setAllPosts([...data])
    }
  }, [data])

  const openMorePosts = () => {
    setPage((prev) => prev + 1)
  }

  if (isFetching && page === 1) {
    return (
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <ClipLoader />
      </div>
    )
  }
  return (
    <>
      <LayoutPosts
        layout={layout}
        rows={rows}
        columns={columns}
      >
        {allPosts.map((post) => (
          <Post
            variant={template}
            username={post?.user?.username ?? post.userId}
            key={post.id}
            {...post}
          />
        ))}
      </LayoutPosts>
      {navigation === NAVIGATION_VARIANTS.loadMore && allPosts.length < TOTAL_ELEMENTS && (
        <div className={'w-full flex justify-center p-6'}>
          <Button
            onClick={openMorePosts}
            disabled={isFetching}
          >
            Загрузить еще
          </Button>
        </div>
      )}
      {navigation === NAVIGATION_VARIANTS.pagination && (
        <CustomPagination
          currentPage={page}
          pageSize={limit}
          setPage={setPage}
        />
      )}
    </>
  )
}
