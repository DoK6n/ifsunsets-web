import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '~/components/ui/tooltip'

const queryClient = new QueryClient()

export function getContext() {
  return {
    queryClient,
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>{children}</TooltipProvider>
    </QueryClientProvider>
  )
}
