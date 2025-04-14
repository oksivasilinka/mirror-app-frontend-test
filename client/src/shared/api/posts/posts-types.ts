import { Post } from '@/entities/posts'

export type GetPostsPayload = {
  page: number
  limit: string
}

export type GetPostsResponse = Post[]
