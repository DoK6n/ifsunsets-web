import { Route } from '~/routes/news.$id'
import { PostDetail } from '~/widgets/post-detail/ui'

export const NewsPostDetail: React.FC = () => {
  const { id } = Route.useParams()
  return <PostDetail postId={id} />
}
