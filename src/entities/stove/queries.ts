import { queryOptions } from '@tanstack/react-query'
import type { Article, SystemRequirement } from '~/routes/api/stove/-types'
import { api } from '~/shared/lib'

export const stoveQueries = {
  systemRequirement: () =>
    queryOptions({
      queryKey: ['stoveSystemRequirement'],
      queryFn: () => api.get('api/stove/system/requirement').json<SystemRequirement>(),
    }),
  articles: () =>
    queryOptions({
      queryKey: ['articlesList'],
      queryFn: () => api.get('api/stove/articles').json<Article[]>(),
    }),
}
