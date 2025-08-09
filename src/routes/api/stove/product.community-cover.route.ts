import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { STOVE_PRODUCT_NO, StoveApiComponentId } from './-constants'
import { createStoveProductComunityCoverRequestDto } from './-dtos'
import { StoveProductModule } from './-modules'

export const ServerRoute = createServerFileRoute('/api/stove/product/community-cover')
  .middleware([StoveProductModule])
  .methods({
    GET: async ({ context: { productService } }) => {
      const dto = createStoveProductComunityCoverRequestDto(
        StoveApiComponentId.INDIE_PRODUCT_COMMUNITY_COVER_COMPONENT,
        STOVE_PRODUCT_NO,
        Date.now(),
      )

      const data = await productService.getComunityCover(dto)
      return json(data)
    },
  })
