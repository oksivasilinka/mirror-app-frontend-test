import { CustomCard, Time } from '@/shared/ui'
import { Post as PostType } from '@/entities/posts'
import { User } from '@/entities/users'
import { TEMPLATE_VARIANTS, TemplateTypes } from '@/entities/settings'

type PostProps = Pick<PostType, 'date' | 'comments' | 'likes' | 'caption'> &
  Pick<User, 'username'> & {
    variant?: TemplateTypes
  }

export const Post = ({
  caption,
  date,
  comments,
  likes,
  username,
  variant = TEMPLATE_VARIANTS.classic,
}: PostProps) => {
  return (
    <CustomCard
      variant={variant}
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
