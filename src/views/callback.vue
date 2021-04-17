<script>
import { defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import request from '../utils/request'
import moduleName from 'axios'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    async function generateToken() {
      const query = route.query
      if (query?.code) {
        const code = query.code

        const formData = {
          code: code,
          client_id: 'minhnh21',
          client_secret: 'minhnh21',
          grant_type: 'authorization_code',
          redirect_uri: 'http://127.0.0.1:9010/callback',
        }

        const encodeFormData = (data) => {
          return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        }

        try {
          const response = await fetch(`http://127.0.0.1:4444/oauth2/token`, {
            body: encodeFormData(formData),
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
          })
          if (response.ok) {
            const { access_token } = await response.json()
            const userResponse = await fetch(`http://127.0.0.1:3000/userinfor`, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                Authorization: `bearer ${access_token}`,
              },
            })
            if (userResponse.ok) {
              const { email, name } = await userResponse.json()
              router.push({ name: 'home-loggedin', params: { email, name } })
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    onMounted(() => {
      generateToken()
    })
    return {
      generateToken,
    }
  },
})
</script>

<template>
  <main>Check callback</main>
</template>
