<template>
  <div>
    <h1>Edit Medical Record</h1>
    <medical-record-form @createOrUpdate="createOrUpdate" :record=record></medical-record-form>
  </div>
</template>

<script>
import medicalRecordForm from '../components/MedicalRecordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit-medical-record',
  components: {
    'medical-record-form': medicalRecordForm
  },
  data: function() {
    return {
      record: {}
    };
  },
  methods: {
    createOrUpdate: async function(record) {
      await api.updatemedicalrecord(record);
      this.flash('patient updated sucessfully!', 'success');
      this.$router.push(`/patients/medicalrecords/${this.$route.params.id}/show`);
    }
  },
  async mounted() {
    this.record = await api.getamedicalrecord(this.$route.params.id);
  }
};
</script>