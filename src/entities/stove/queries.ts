import { queryOptions } from '@tanstack/react-query'
import ky from 'ky'
import type { Article, SystemRequirement } from '~/routes/api/stove/-types'

export const stoveQueries = {
  systemRequirement: () =>
    queryOptions({
      queryKey: ['stoveSystemRequirement'],
      queryFn: () => ky.get('api/stove/system/requirement').json<SystemRequirement>(),
    }),
  articles: () =>
    queryOptions({
      queryKey: ['articlesList'],
      queryFn: () => ky.get('api/stove/articles').json<Article[]>(),
    }),
}
