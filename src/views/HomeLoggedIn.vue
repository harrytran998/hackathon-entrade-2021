<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import HeaderLoggedIn from '@/components/HeaderLoggedIn.vue'
import {} from '@headlessui/vue'

export default defineComponent({
  components: {
    HeaderLoggedIn,
  },
  setup() {},
})
</script>

<template>
  <HeaderLoggedIn />
</template>
