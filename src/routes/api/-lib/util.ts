export const asSearchParams = <T>(params: T): T & { [key: string]: string } => params as T & { [key: string]: string }
