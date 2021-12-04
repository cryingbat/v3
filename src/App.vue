<script>
import { defineComponent } from "@vue/runtime-core"
import { onMounted } from "vue"
export default defineComponent({
  setup() {
    onMounted(() => {
      localStorage.setItem("lang", "zh")
    })
  },
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
