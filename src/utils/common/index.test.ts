import { isFunction } from '@/utils'
import { describe, expect, it } from 'vitest'

describe('typeof', () => {
  it('isFunction', () => {
    expect(isFunction(() => {})).toEqual(true)
    expect(isFunction('')).toEqual(false)
  })
})
