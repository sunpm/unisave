import { describe, expect, it } from 'vitest'
import { convertToDayjsParam, diffDate, formatFullTime, formatTime, isMillisecondTimestamp } from '../src/utils'

describe('dayjs', () => {
  it('判断时间戳是否毫秒', () => {
    expect(isMillisecondTimestamp(1617962553000)).toBe(true)
    expect(isMillisecondTimestamp(1617962553)).toBe(false)
    expect(isMillisecondTimestamp(new Date())).toBe(false)
  })
  it('转换为 dayjs 接收参数', () => {
    const date = new Date()
    expect(convertToDayjsParam(1617962553000)).toBe(1617962553000)
    expect(convertToDayjsParam(1617962553)).toBe(1617962553000)
    expect(convertToDayjsParam(date)).toBe(date)
  })
  it('格式化时间', () => {
    expect(formatTime(1617962553000)).toBe('2021-04-09')
    expect(formatTime(1617962553)).toBe('2021-04-09')
    expect(formatFullTime(1617962553)).toBe('2021年04月09日 18:02:33')
  })
  it('计算日期差值', () => {
    expect(diffDate(1713775988000, 1714207988000)).toBe(-5)
  })
})
