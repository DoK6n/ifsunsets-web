import { createFileRoute } from '@tanstack/react-router'
import { CommunityBoard } from '~/pages/community'

export const Route = createFileRoute('/community/')({
  component: CommunityBoard,
})
