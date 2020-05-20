<template>
  <div>
    <h1>Edit Doctor</h1>
    <doctor-form @createOrUpdate="createOrUpdate" v-for="(doctor, i) in doctors" :key="i" :doctor=doctor></doctor-form>
  </div>
</template>

<script>
import doctorForm from '../components/DoctorForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit-doctor',
  components: {
    'doctor-form': doctorForm
  },
  data: function() {
    return {
      doctors: []
    };
  },
  methods: {
    createOrUpdate: async function(doctor) {
      await api.updateuser(doctor);
      this.flash('doctor updated sucessfully!', 'success');
      this.$router.push(`/doctors/${this.$route.params.id}`);
    }
  },
  async mounted() {
    this.doctors = await api.getuser(this.$route.params.id);
  }
};
</script>