<template>
  <div>
    <h1>Show Doctor Details</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      NIC
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.NIC"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
      Name
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i"  :value='doctor.FirstName+" "+doctor.MiddleName+" "+doctor.Surname'/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      DOB
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.DOB"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Mobile Phone
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.MobilePhone"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Home Telephone
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.HomeTelephone"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Email
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.Email"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Address Line 1
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.AddressLine1"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Address Line 2
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.AddressLine2"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Hospital
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.Hospital"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      Ward
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.Ward"/>
    </div>


    <div class="ui labeled input fluid">
      <div class="ui label">
      Area of Expertise
      </div>
      <input type="text" readonly v-for="(doctor, i) in doctors" :key="i" :value="doctor.AreaOfExpertise"/>
    </div>

    <div class="actions">
      <table>
        <th>
          <router-link :to="{ name: 'edit-doctor', params: { id: this.$route.params.id }}">
            Edit Doctor
          </router-link>
        </th>
        <th>
          <router-link :to="{ name: 'doctors'}">
            Doctors
          </router-link>
        </th>
        <th>
          <router-link :to="{ name: 'assigned-medical-records', params: { id: this.$route.params.id }}">
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
  name: 'show-doctor',
  data() {
    return {
      doctors: ''
    };
  },
  async mounted() {
    this.doctors = await api.getuser(this.$route.params.id);
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