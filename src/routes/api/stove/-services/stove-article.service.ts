import { V1 } from '../-constants'
import type { StoveProductComunityCoverRequestDto } from '../-dtos'
import { getProps, httpClient } from '../-lib'
import type { StoveCompApiResponse, StoveProductComunityCover } from '../-types'

export class StoveArticleService {
  private readonly API_URL = `cwms/${V1}/channel/10000/article_group/FIXED_ARTICLE/article/list`

  public getArticles = async (dto: StoveProductComunityCoverRequestDto) => {
    const response = await httpClient.get(this.API_URL, {
      searchParams: dto,
    })

    const data = await response.json<StoveCompApiResponse<StoveProductComunityCover>>()
    return getProps(data)
  }
}
