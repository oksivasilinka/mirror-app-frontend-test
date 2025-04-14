export const getValue = <T>(config: T, data?: keyof T): T[keyof T] | string => {
  if (!data) {
    return ''
  }
  return config[data]
}
