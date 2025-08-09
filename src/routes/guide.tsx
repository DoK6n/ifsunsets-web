import { createFileRoute } from '@tanstack/react-router'
import { GameGuide } from '~/pages/guide'

export const Route = createFileRoute('/guide')({
  component: GameGuide,
})
