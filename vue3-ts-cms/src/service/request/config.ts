/*
  根据process.env.NODE_ENV判断
  开发环境：development
  生产环境：production
  测试环境：test
*/

let BASE_URL: string = ""
let TIMEOUT: number = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = "http://152.136.185.210:5000/"
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = "pro"
} else {
  BASE_URL = "test"
}
export { BASE_URL, TIMEOUT }
