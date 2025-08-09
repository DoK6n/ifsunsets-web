export type StoveApiResponse<T> = {
  code: number
  message: string
  value: T
}

export type StoveComp<T> = {
  components: {
    id: string
    type: string
    title: string
    props: T
  }[]
  title: string
  type: string
}

export type StoveCompApiResponse<T> = StoveApiResponse<StoveComp<T>>

export type StoveArticleList<T> = {
  article_group_seq: number
  list: T[]
}[]

export type StoveArticlesApiResponse<T> = StoveApiResponse<StoveArticleList<T>>
