import { CustomCard, Time } from '@/shared/ui'
import { Post as PostType } from '@/entities/posts'
import { User } from '@/entities/users'

type PostProps = Pick<PostType, 'date' | 'comments' | 'likes' | 'caption'> & Pick<User, 'username'>

export const Post = ({ caption, date, comments, likes, username }: PostProps) => {
  return (
    <CustomCard
      title={username}
      titleDescription={<Time date={date} />}
      content={caption}
      footer={
        <div className={'flex gap-2'}>
          <span>{likes} likes</span>
          <span>{comments} comments</span>
        </div>
      }
    />
  )
}
