<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const locale = zhCN
        return {
            locale,
        }
    },
})
</script>
