<template>
  <div>
    <h1>New Patient</h1>
    <patient-form @createOrUpdate="createOrUpdate" :patient=patient></patient-form>
  </div>
</template>

<script>
import patientForm from '../components/PatientForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-patient',
  components: {
    'patient-form': patientForm
  },
 
  methods: {
    createOrUpdate: async function(patient) {
      const res = await api.createuser(patient);
      this.flash('Patient Created', 'success');
      this.$router.push(`/patients/${res.NIC}`);
    }
  }
};
</script>