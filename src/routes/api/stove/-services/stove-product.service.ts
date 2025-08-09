import { V1 } from '../-constants'
import type { StoveProductComunityCoverRequestDto, StoveSystemRequirementRequestDto } from '../-dtos'
import { getProps, httpClient } from '../-lib'
import type { StoveCompApiResponse, StoveProductComunityCover } from '../-types'

export class StoveProductService {
  private readonly API_URL = `store/${V1}/components/groups/product-merge`

  public getComunityCover = async (dto: StoveProductComunityCoverRequestDto) => {
    const response = await httpClient.get(this.API_URL, {
      searchParams: dto,
    })

    const data = await response.json<StoveCompApiResponse<StoveProductComunityCover>>()
    return getProps(data)
  }

  public getSystemRequirement = async (dto: StoveSystemRequirementRequestDto) => {
    const response = await httpClient.get(this.API_URL, {
      searchParams: dto,
    })

    const data = await response.json<StoveCompApiResponse<StoveSystemRequirementRequestDto>>()
    return getProps(data)
  }
}
