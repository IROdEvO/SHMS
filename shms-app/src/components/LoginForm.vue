<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
      NIC
      </div>
      <input type="text" placeholder="Enter Details" v-model="login.NIC" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Password
      </div>
      <input type="text" placeholder="Enter Details" v-model='login.Password' />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    login: {
      type: Object,
      required: false,
      default: () => {
        return {
          NIC: '',
          Password:''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.login.NIC === '' ||
      this.login.Password === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.login);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>