export type GetPostsPayload = {
  page: number
  limit: number
}

export type GetPostsResponse = {
  caption: string
  id: string
  date: string
  comments: number
  likes: number
  permalink: string
  userId: string
}
