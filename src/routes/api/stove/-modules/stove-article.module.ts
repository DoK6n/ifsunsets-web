import { createMiddleware } from '@tanstack/react-start'
import { StoveArticleService } from '../-services'

export const StoveArticleModule = createMiddleware({ type: 'request' }).server(({ next }) =>
  next({
    context: {
      stoveArticleService: new StoveArticleService(),
    },
  }),
)
