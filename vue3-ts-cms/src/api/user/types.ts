/* 登录接口参数类型 */
export interface ILoginData {
  name: string,
  password: string
}

/* 登录接口返回值类型 */
export interface ILoginRes {
  id: number,
  name: string,
  token: string
}
/* 登录 */
export interface ILoginDataType<T = any> {
  code: number,
  data: T
}
