import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { STOVE_PRODUCT_NO, StoveApiComponentId } from './-constants'
import { createStoveSystemRequirementRequestDto } from './-dtos'
import { StoveProductModule } from './-modules'

export const ServerRoute = createServerFileRoute('/api/stove/system/requirement')
  .middleware([StoveProductModule])
  .methods({
    GET: async ({ context: { productService } }) => {
      const dto = createStoveSystemRequirementRequestDto(
        StoveApiComponentId.INDIE_PRODUCT_REQUIREMENT_INFO_COMPONENT,
        STOVE_PRODUCT_NO,
        Date.now(),
      )

      const data = await productService.getSystemRequirement(dto)
      return json(data)
    },
  })
