import { createFileRoute } from '@tanstack/react-router'
import { queries } from '~/entities'
import { Home } from '~/pages/home'

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(queries.youtube.playlistItems())
    await context.queryClient.ensureQueryData(queries.stove.systemRequirement())
  },
  component: Home,
})
