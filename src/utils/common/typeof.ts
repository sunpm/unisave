/** 数据类型 */
export enum EDataType {
  number = '[object Number]',
  string = '[object String]',
  boolean = '[object Boolean]',
  null = '[object Null]',
  undefined = '[object Undefined]',
  object = '[object Object]',
  array = '[object Array]',
  function = '[object Function]',
  date = '[object Date]',
  regexp = '[object RegExp]',
  promise = '[object Promise]',
  async = '[object AsyncFunction]',
  set = '[object Set]',
  map = '[object Map]',
  file = '[object File]',
}

export function isNumber<T extends number>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.number
}

export function isString<T extends string>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.string
}

export function isBoolean<T extends boolean>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.boolean
}

export function isNull<T extends null>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.null
}

export function isUndefined<T extends undefined>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.undefined
}

export function isObject<T extends Record<string, any>>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.object
}

export function isArray<T extends any[]>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.array
}

export function isFunction<T extends (...args: any[]) => any | void | never>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.function || isAsync(data)
}

export function isDate<T extends Date>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.date
}

export function isRegExp<T extends RegExp>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.regexp
}

export function isPromise<T extends Promise<any>>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.promise
}

export function isAsync<T extends Promise<any>>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.async
}

export function isSet<T extends Set<any>>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.set
}

export function isMap<T extends Map<any, any>>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.map
}

export function isFile<T extends File>(data: T | unknown): data is T {
  return Object.prototype.toString.call(data) === EDataType.file
}

export function isEmptyObject(data: any) {
  return Object.keys(data).length === 0
}
