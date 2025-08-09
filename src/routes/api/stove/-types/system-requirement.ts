export type SystemRequirement = {
  product_no: number
  display_section: string
  system_spec: {
    minimum: SystemSpec
    recommended: SystemSpec
  }
}

export type SystemSpec = {
  os: string
  processor: string
  memory: string
  graphic: string
  directx: string
  storage: string
  sound: string
  others: string
}
