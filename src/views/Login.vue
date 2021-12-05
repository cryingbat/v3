<template>
  <div class="login-body">
    <div class="change-lang" @click="changeLang">切换语言</div>
    <div class="login-container">
      <div class="head">Vue3.0</div>
      <el-form
        label-position="top"
        @keyup.enter="submitForm"
        :rules="rules"
        :model="ruleForm"
        ref="loginForm"
        class="login-form">
        <el-form-item :label="$t('login.account')" prop="username">
          <el-input
            type="text"
            v-model.trim="ruleForm.username"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('login.pwd')" prop="password">
          <el-input
            type="password"
            v-model.trim="ruleForm.password"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm">{{
            $t('login.submit')
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const appName = ref(null)
    const loginForm = ref(null)

    const { locale } = useI18n()
    const state = reactive({
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      checked: true,
      rules: {
        username: [
          { required: 'true', message: '账户不能为空', trigger: 'blur' }
        ],
        password: [
          { required: 'true', message: '密码不能为空', trigger: 'blur' }
        ]
      }
    })
    const submitForm = () => {
      loginForm.value.validate(valid => {
        if (!valid) return false
        router.push('/home')
      })
    }
    const resetForm = () => {
      loginForm.value.resetFields()
    }

    const changeLang = () => {
      let lang = ['zh', 'en']

      let currentLang = localStorage.getItem('lang') || 'zh'

      let setLang = lang[Number(!lang.findIndex(v => v === currentLang))]

      localStorage.setItem('lang', setLang)
      locale.value = setLang
    }
    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      resetForm,
      appName,
      changeLang
    }
  }
}
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2);
}
.change-lang {
  position: absolute;
  right: 25px;
  top: 25px;
  cursor: pointer;
}
.login-container {
  width: 420px;
  height: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>
