import type { StoveBaseRequestDto } from './stove-base.request.dto'

export interface StoveSystemRequirementRequestDto extends StoveBaseRequestDto {}

export const createStoveSystemRequirementRequestDto = (
  component_ids: string,
  product_no: number,
  timestemp: number,
): StoveSystemRequirementRequestDto => ({
  component_ids,
  product_no: product_no.toString(),
  timestemp: timestemp.toString(),
})
