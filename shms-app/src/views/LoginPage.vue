<template>
  <div>
    <h1>Login</h1>
    <login-form @createOrUpdate="createOrUpdate" :login=login></login-form>
  </div>
</template>

<script>
import loginForm from '../components/LoginForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'login-page',
  components: {
    'login-form': loginForm
  },
 
  methods: {
    createOrUpdate: async function(login) {
      const res = await api.userlogin(login);
      this.flash('Logged in', 'success',res);
      this.$router.push(`/dashboard`);
    }
  }
};
</script>