import { createFileRoute } from '@tanstack/react-router'
import { NewsPostDetail } from '~/pages/news'

export const Route = createFileRoute('/news/$id')({
  component: NewsPostDetail,
})
