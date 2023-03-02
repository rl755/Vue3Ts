<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="verify-code">
        <div class="get-code">
          <el-input v-model="phone.verifyCode" />
          <el-button type="primary" class="gen-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from "../config/phone-config"

export default defineComponent({
  setup() {
    const phone = reactive({
      number: "",
      verifyCode: ""
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
