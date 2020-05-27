<template>
  <div>
    <h1>New Doctor</h1>
    <doctor-form @createOrUpdate="createOrUpdate" :doctor=doctor></doctor-form>
  </div>
</template>

<script>
import doctorForm from '../components/DoctorForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-doctor',
  components: {
    'doctor-form': doctorForm
  },
  methods: {
    createOrUpdate: async function(doctor) {
      const res = await api.createuser(doctor);
      this.flash('doctor created', 'success');
      this.$router.push(`/doctors/${res.NIC}`);
    }
  }
};
</script>