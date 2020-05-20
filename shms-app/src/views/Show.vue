<template>
  <div>
    <h1>Show Patient Details</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      NIC
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.NIC"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
      Name
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i"  :value='patient.FirstName+" "+patient.MiddleName+" "+patient.Surname'/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      DOB
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.DOB"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Mobile Phone
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.MobilePhone"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Home Telephone
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.HomeTelephone"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Email
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.Email"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Address Line 1
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.AddressLine1"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Address Line 2
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.AddressLine2"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Hospital
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.Hospital"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Ward
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.Ward"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Patient Type
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.PatientType"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Device ID
      </div>
      <input type="text" readonly v-for="(patient, i) in patients" :key="i" :value="patient.DeviceID"/>
    </div>

    <div class="actions">
      <table>
        <th>
          <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
            Edit Patient
          </router-link>
        </th>
        <th>
          <router-link :to="{ name: 'patients'}">
            Patients
          </router-link>
        </th>
        <th>
          <router-link :to="{ name: 'medical-records', params: { id: this.$route.params.id }}">
            Medical Records
          </router-link>
        </th>
      </table>
      
      
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      patients: ''
    };
  },
  async mounted() {
    this.patients = await api.getuser(this.$route.params.id);
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