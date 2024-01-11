import { describe, expect, it } from 'vitest'
import { isFunction } from '@/utils'

describe('typeof', () => {
  it('isFunction', () => {
    expect(isFunction(() => {})).toEqual(true)
    expect(isFunction('')).toEqual(false)
  })
})
