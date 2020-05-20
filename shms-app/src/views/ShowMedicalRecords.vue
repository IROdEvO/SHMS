<template>
  <div>
    <h1>Show Medical Record Details</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      Condition
      </div>
      <input type="text" readonly :value="record.Condition"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
      Patient NIC
      </div>
      <input type="text" readonly :value='record.BelongingPatientNIC'/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Assigned Doctor
      </div>
      <input type="text" readonly :value="record.AssignedDoctorNIC"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Diagnosed Date
      </div>
      <input type="text" readonly :value="record.DiagnosedDate"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Recovery Status
      </div>
      <input type="text" readonly :value="record.RecoveryStatus"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Details
      </div>
    <textarea rows="10" cols="50" placeholder="Enter Details" form="inputForm" v-model="record.Details"></textarea>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Recovered Date
      </div>
      <input type="text" readonly :value="record.RecoveredDate"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Record Created At
      </div>
      <input type="text" :value="record.createdAt"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Record Updated At
      </div>
      <input type="text" readonly :value="record.updatedAt"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit-medical-record', params: {id: this.$route.params.id }}">
        Edit
      </router-link>
      <router-link :to="{ name: 'medical-records', params:{id: record.BelongingPatientNIC}}">
        Medical Records
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show-medicalrecords',
  data() {
    return {
      record: ''
    };
  },
  async mounted() {
    this.record = await api.getamedicalrecord(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>