<template>
  <div>
    <h1>Doctors</h1>
    <table id="doctors" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>NIC</th>
          <th> <i class="info circle icon"></i>Name</th>
          <th> <i class="lock open icon"></i></th>
          <th><i class="tasks icon"></i></th>

          <th> <i class="trash icon"></i></th>



          <th colspan="4"></th>
        </tr>
      </thead>
      <tr v-for="(doctor, i) in doctors" :key="i">
        <td>{{ doctor.NIC }}</td>
        <td>{{ doctor.FirstName }} {{doctor.MiddleName}} {{doctor.Surname}}</td>

        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show-doctor', params: { id: doctor.NIC }}">Show</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'assigned-medical-records', params: {id: doctor.NIC}}">Medical Records</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(doctor.NIC)">
          <a :href="`/doctors/${doctor._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'doctors',
  data() {
    return {
      doctors: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteuser(id);
      this.flash('doctor deleted sucessfully!', 'success');
      this.doctors = await api.getdoctors();
    }
  },
  async mounted() {
    this.doctors = await api.getdoctors();
  }
};
</script>