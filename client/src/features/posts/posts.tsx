import { Post } from '@/features/posts/ui'
import { NAVIGATION_VARIANTS } from '@/entities/settings'
import { ChildrenProps, ConditionalRender, Spinner } from '@/shared/ui'
import { CustomPagination } from '@/shared/ui/custom-pagination'
import { LayoutPosts } from '@/widgets/layout-posts'
import { TOTAL_ELEMENTS } from '@/shared/constants'
import { useGetPosts } from '@/features/posts/model'
import { ButtonOpenMore } from '@/entities/posts'

type PostsProps = ChildrenProps

export const Posts = ({ page, setPage }: PostsProps) => {
  const { isFetching, allPosts, openMorePosts, navigation, limit, template, ...layoutProps } =
    useGetPosts({ page, setPage })

  if (isFetching && page === 1) {
    return <Spinner />
  }

  return (
    <>
      <LayoutPosts {...layoutProps}>
        {allPosts.map((post) => (
          <Post
            variant={template}
            username={post?.user?.username ?? post.userId}
            key={post.id}
            {...post}
          />
        ))}
      </LayoutPosts>

      <ConditionalRender
        condition={navigation === NAVIGATION_VARIANTS.loadMore && allPosts.length < TOTAL_ELEMENTS}
      >
        <ButtonOpenMore
          openMorePosts={openMorePosts}
          isFetching={isFetching}
        />
      </ConditionalRender>

      <ConditionalRender condition={navigation === NAVIGATION_VARIANTS.pagination}>
        <CustomPagination
          page={page}
          pageSize={limit}
          setPage={setPage}
        />
      </ConditionalRender>
    </>
  )
}
