import { request } from '../request'

export async function demoFetch() {
  const result = await request<DemoRes, DemoReq>('/demo/index', {
    name: '123',
  })
  console.log(result.name, result.age)
  return result
}
