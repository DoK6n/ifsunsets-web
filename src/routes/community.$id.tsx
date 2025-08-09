import { createFileRoute } from '@tanstack/react-router'
import { CommunityPostDetail } from '~/pages/community'

export const Route = createFileRoute('/community/$id')({
  component: CommunityPostDetail,
})
