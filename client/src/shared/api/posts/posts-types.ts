import { Post } from '@/entities/posts'

export type GetPostsPayload = {
  page: number
  limit: number
}

export type GetPostsResponse = Post[]
