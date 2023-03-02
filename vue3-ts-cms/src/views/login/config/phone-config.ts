// 编写规则
// 编写规则
export const rules = {
  phone: [
    {
      required: true,
      message: "手机号为必填！",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{11}$/,
      message: "手机号必须为11位",
      trigger: "blur"
    }
  ]
};
