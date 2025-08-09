import { createFileRoute } from '@tanstack/react-router'
import { queries } from '~/entities'
import { NewsBoard } from '~/pages/news'

export const Route = createFileRoute('/news/')({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(queries.stove.articles())
  },
  component: NewsBoard,
})
