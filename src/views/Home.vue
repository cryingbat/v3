<template>
  <el-container class="container">
    <el-aside class="aside">
      <div class="head">vue3 admin</div>
      <div class="line" />
    </el-aside>
    <el-container class="content">
      <Header />
      <div class="main">
        <router-view />
      </div>
      <Footer />
    </el-container>
  </el-container>
</template>
<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },

  setup(context, props) {
    console.log(context, props, x)
  }
})
</script>
<style scoped>
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.aside::-webkit-scrollbar {
  display: none;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.head {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>
