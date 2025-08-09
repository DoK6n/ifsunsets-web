import { Route } from '~/routes/community.$id'
import { PostDetail } from '~/widgets/post-detail/ui'

export const CommunityPostDetail: React.FC = () => {
  const { id } = Route.useParams()
  return <PostDetail postId={id} />
}
