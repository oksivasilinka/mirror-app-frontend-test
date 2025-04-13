import { Post } from '@/features/posts/ui'
import { useGetPostsQuery } from '@/shared/api/posts'

export const Posts = () => {
  const { data, isFetching } = useGetPostsQuery({ page: 1, limit: 20 })

  if (isFetching) return null

  return data?.map((post) => (
    <Post
      username={post.userId}
      key={post.id}
      {...post}
    />
  ))
}
