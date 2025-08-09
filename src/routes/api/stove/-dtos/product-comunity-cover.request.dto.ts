import type { StoveBaseRequestDto } from './stove-base.request.dto'

export interface StoveProductComunityCoverRequestDto extends StoveBaseRequestDto {}

export const createStoveProductComunityCoverRequestDto = (
  component_ids: string,
  product_no: number,
  timestemp: number,
): StoveProductComunityCoverRequestDto => ({
  component_ids,
  product_no: product_no.toString(),
  timestemp: timestemp.toString(),
})
