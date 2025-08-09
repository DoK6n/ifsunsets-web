import type { StoveCompApiResponse } from '../-types'

export const getProps = <T>(data: StoveCompApiResponse<T>) => data.value.components[0].props
