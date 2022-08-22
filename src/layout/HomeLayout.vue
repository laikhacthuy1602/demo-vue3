<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/common/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {},
});
</script>
<template>
  <Header />
  <router-view />
</template>
