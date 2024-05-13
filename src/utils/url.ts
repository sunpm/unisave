// 将对象转换成 URL 查询字符串
export function getQueryStringify(params?: Record<string, any>) {
  if (!params)
    return ''

  const queryString = Object.entries(params) // 将对象转换成 [key, value] 数组
    .map(([key, value]) => encodeURI(
          `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}`,
    )) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
    .join('&') // 将数组用 & 符号连接成字符串
  if (queryString)
    return `?${queryString}`

  return queryString
}

// 获取带查询字符串的路由 URL
export function getPathQueryString(path: string, params?: Record<string, any>) {
  return path + getQueryStringify(params)
}
