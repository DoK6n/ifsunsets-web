export interface StoveArticlesRequestDto {
  article_group_seq_list: string
  interaction_type_code: string
  location_code: string
  timestemp: string
}

export function createStoveArticlesRequest(
  article_group_seq_list: string,
  interaction_type_code: string,
  location_code: string,
  timestemp: number,
): StoveArticlesRequestDto {
  return {
    article_group_seq_list,
    interaction_type_code,
    location_code,
    timestemp: timestemp.toString(),
  }
}
