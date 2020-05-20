<template>
  <div>
    <h1>Patients</h1>
    <table id="patients" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>NIC</th>
          <th> <i class="info circle icon"></i>Name</th>
          <th> <i class="info circle icon"></i>Type</th>

          <th> <i class="lock open icon"></i></th>
          <th><i class="tasks icon"></i></th>
          <th><i class="tasks icon"></i></th>
          <th> <i class="trash icon"></i></th>



          <th colspan="4"></th>
        </tr>
      </thead>
      <tr v-for="(patient, i) in patients" :key="i">
        <td>{{ patient.NIC }}</td>
        <td>{{ patient.FirstName }} {{patient.MiddleName}} {{patient.Surname}}</td>
        <td>{{ patient.PatientType }}</td>

        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: patient.NIC }}">Show</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'medical-records', params: {id: patient.NIC}}">Medical Records</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'vital-records', params: {id: patient.DeviceID, NIC:patient.NIC}}">Vital Records</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(patient.NIC)">
          <a :href="`/patients/${patient._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'patients',
  data() {
    return {
      patients: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteuser(id);
      this.flash('patient deleted sucessfully!', 'success');
      this.patients = await api.getpatients();
    }
  },
  async mounted() {
    this.patients = await api.getpatients();
  }
};
</script>