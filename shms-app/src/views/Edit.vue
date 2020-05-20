<template>
  <div>
    <h1>Edit Patient</h1>
    <patient-form @createOrUpdate="createOrUpdate" v-for="(patient, i) in patients" :key="i" :patient=patient></patient-form>
  </div>
</template>

<script>
import patientForm from '../components/PatientForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'patient-form': patientForm
  },
  data: function() {
    return {
      patients: []
    };
  },
  methods: {
    createOrUpdate: async function(patient) {
      await api.updateuser(patient);
      this.flash('patient updated sucessfully!', 'success');
      this.$router.push(`/patients/${this.$route.params.id}`);
    }
  },
  async mounted() {
    this.patients = await api.getuser(this.$route.params.id);
  }
};
</script>