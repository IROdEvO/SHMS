<template>
  <div>
    <h1>New Medical Record</h1>
    <medical-record-form @createOrUpdate="createOrUpdate" :record=record></medical-record-form>
  </div>
</template>

<script>
import medicalRecordForm from '../components/MedicalRecordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-medical-record',
  components: {
    'medical-record-form': medicalRecordForm
  },
  data: function() {
    return {
      record: {"BelongingPatientNIC":this.$route.params.id}
    };
  },
  
  methods: {
    createOrUpdate: async function(record) {
      await api.createmedicalrecord(record);
      this.flash('record created sucessfully!', 'success');
      this.$router.push(`/patients/medicalrecords/${this.$route.params.id}`);
    }
  }
};
</script>