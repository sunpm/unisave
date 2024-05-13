import { describe, expect, it, vi } from 'vitest'
import { failValidate, validate } from '../src/utils'

describe('validate function', () => {
  it('should pass validation for correct form', async () => {
    const form = { name: 'testname', age: 20 }
    const rules = {
      name: [
        { required: true, min: 3, max: 10, message: 'Invalid name' },
      ],
      age: [
        { required: true, min: 1, max: 100, message: 'Invalid age' },
      ],
    }
    const cb = (bool: boolean) => {
      expect(bool).toBe(true)
    }
    validate(form, rules, cb)
  })
  it('should pass validation of error form', async () => {
    const form = { name: 'n', age: 20 }
    const rules = {
      name: [
        { required: true, min: 3, max: 10, message: 'Invalid name' },
      ],
      age: [
        { required: true, min: 1, max: 100, message: 'Invalid age' },
      ],
    }
    const cb = (bool: boolean) => {
      expect(bool).toBe(false)
    }
    validate(form, rules, cb)
  })
})

describe('failValidate function', () => {
  it('should handle failed validation', async () => {
    const cb = vi.fn()
    const msg = 'test message'
    failValidate(msg, cb)
    expect(cb).toHaveBeenCalledWith(false, undefined)
  })
})
