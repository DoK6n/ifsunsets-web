import { createMiddleware } from '@tanstack/react-start'
import { StoveProductService } from '../-services'

export const StoveProductModule = createMiddleware({ type: 'request' }).server(({ next }) =>
  next({
    context: {
      productService: new StoveProductService(),
    },
  }),
)
