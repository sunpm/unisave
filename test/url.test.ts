import { describe, expect, it } from 'vitest'
import { getPathQueryString, getQueryStringify } from '../src/utils'

describe('url', () => {
  it('getQueryStringify', () => {
    expect(getQueryStringify({ })).toEqual('')
    expect(getQueryStringify({ aa: '123' })).toEqual('?aa=123')
    expect(getQueryStringify({ aa: '123', bb: '456' })).toEqual('?aa=123&bb=456')
    expect(getPathQueryString('/pages/hi')).toEqual('/pages/hi')
    expect(getPathQueryString('/pages/hi', { aa: '123' })).toEqual('/pages/hi?aa=123')
    expect(getPathQueryString('/pages/hi', { aa: '123', bb: '456' })).toEqual('/pages/hi?aa=123&bb=456')
  })
})
