import { createFileRoute } from '@tanstack/react-router'
import { CreatePost } from '~/pages/community'

export const Route = createFileRoute('/community/create')({
  component: CreatePost,
})
