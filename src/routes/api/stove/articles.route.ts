import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { createStoveArticlesRequest } from './-dtos'
import { StoveArticleModule } from './-modules'

export const ServerRoute = createServerFileRoute('/api/stove/articles')
  .middleware([StoveArticleModule])
  .methods({
    GET: async ({ context: { stoveArticleService } }) => {
      const dto = createStoveArticlesRequest('123853', 'VIEW,COMMENT', 'CURRENT', Date.now())

      const data = await stoveArticleService.getArticles(dto)
      return json(data)
    },
  })
