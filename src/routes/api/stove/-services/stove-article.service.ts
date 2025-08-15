import { V1 } from '../-constants'
import type { StoveArticlesRequestDto } from '../-dtos'
import { httpClient } from '../-lib'
import type { Article, StoveArticlesApiResponse } from '../-types'
import { asSearchParams } from '../../-lib'

export class StoveArticleService {
  public getArticles = async (dto: StoveArticlesRequestDto) => {
    const response = await httpClient.get(`cwms/${V1}/channel/10000/article_group/FIXED_ARTICLE/article/list`, {
      searchParams: asSearchParams(dto),
    })

    const data = await response.json<StoveArticlesApiResponse<Article>>()
    return data.value[0].list
  }
}
