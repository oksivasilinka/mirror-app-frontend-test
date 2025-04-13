import { User } from '@/entities/users'

export type Post = {
  caption: string
  id: string
  date: string
  comments: number
  likes: number
  permalink: string
  userId: string
  user?: User
}
