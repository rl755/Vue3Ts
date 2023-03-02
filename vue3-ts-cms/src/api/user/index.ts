import request, { http } from "@/service";
import type { ILoginData, ILoginRes, ILoginDataType } from "./types";


/* 登录 */
export function login(data: ILoginData) {
  return http.post<ILoginRes>("/login", data)
}

/* 请求用户数据 */
export function getUserInfo(id: number) {
  return http.get("/users/" + id);
}

/* 查询角色菜单树 */
export function getUserMenusByRoleId(id: number) {
  return http.get("/role/" + id + "/menu", )
}
