import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

// 导入本地化语言
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { isNumber } from '../'

dayjs.locale('zh-cn')
dayjs.extend(customParseFormat)

export type dayJsDate = string | number | Date

// 判断时间戳是否毫秒
export function isMillisecond(timeStamp: dayJsDate) {
  const timeStr = String(timeStamp)
  return timeStr.length > 10
}

export function stringFormat(date: string, format: string) {
  return dayjs(date, format)
}

export function formatCalendar(date?: dayJsDate) {
  return formatTime(date, 'MM-DD')
}

export function formatTime(date?: dayJsDate, format = 'YYYY-MM-DD') {
  if (!date)
    return ''
  // 判断时间戳是否毫秒
  if (!isMillisecond(date) && isNumber(date))
    date *= 1000

  return dayjs(date).format(format)
}

// 将时间戳格式化成完整的时间字符串
export function formatFullTime(date?: dayJsDate) {
  return formatTime(date, 'YYYY年MM月DD日 HH:mm:ss')
}

export function diffDate(start: dayJsDate, end: dayJsDate, unit: dayjs.OpUnitType = 'day') {
  if (!isMillisecond(start) && isNumber(start))
    start *= 1000

  if (!isMillisecond(end) && isNumber(end))
    end *= 1000

  return dayjs(start).diff(dayjs(end), unit)
}

// 获取今天和明天的日期
export function getTodayAndTomorrow(template = 'YYYY-MM-DD') {
  const today = dayjs().format(template)
  const tomorrow = dayjs().add(1, 'day').format(template)
  return { today, tomorrow }
}
