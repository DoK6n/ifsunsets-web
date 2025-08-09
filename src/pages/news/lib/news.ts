import { useSuspenseQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { queries } from '~/entities'
import type { Article } from '~/routes/api/stove/-types'

export interface News {
  id: string
  title: string
  date: string
  headLine: string
  views: number
  comments: number
  isHot?: boolean
  author: string
}

const map = (items: Article[]): News[] =>
  items.map(item => ({
    id: item.article_id,
    title: item.title,
    date: format(item.create_datetime, 'yyyy.MM.dd'),
    headLine: '공지',
    views: item.user_interaction_score_info.view_score,
    comments: item.user_interaction_score_info.comment_score,
    author: `${item.user_info.grade_badge} ${item.user_info.nickname}`,
  }))

export const useNews = () => {
  const { data: articles } = useSuspenseQuery(queries.stove.articles())

  return {
    news: map(articles),
  }
}
