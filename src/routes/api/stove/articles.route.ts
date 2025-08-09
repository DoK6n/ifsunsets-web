import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { createStoveArticlesRequest } from './-dtos'
import { httpClient } from './-lib'
import type { Article, StoveArticlesApiResponse } from './-types'

export const ServerRoute = createServerFileRoute('/api/stove/articles').methods({
  GET: async () => {
    const dto = createStoveArticlesRequest('123853', 'VIEW,COMMENT', 'CURRENT', Date.now())

    const response = await httpClient.get('cwms/v1.0/channel/10000/article_group/FIXED_ARTICLE/article/list', {
      searchParams: dto,
    })

    const data = await response.json<StoveArticlesApiResponse<Article>>()
    return json(data.value[0].list)
  },
})
