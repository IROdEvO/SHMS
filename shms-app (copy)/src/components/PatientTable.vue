<template>
  <div id="patient-table">
       <p v-if="patients.length < 1" class="empty-table">
         No Patient Records Available
  </p>
    <table>
      <thead>
        <tr>
            <th>Patient NIC</th>
          <th>First name</th>
          <th>Middle name</th>
          <th>Surname</th>
           <th>DOB</th>
           <th>Mobile</th>
           <th>Home</th> 
          <th>Email</th>
          <th>Address Line 1</th>
          <th>Address Line 2</th>
          <th>Hospital</th>
          <th>Ward</th>
          <th>Type</th>
          <th>Device Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient._id">
            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.NIC"/>
            </td>
            <td v-else>{{patient.NIC}}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.FirstName"/>
            </td>
          <td v-else>{{ patient.FirstName }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.MiddleName"/>
            </td>
            <td v-else>{{ patient.MiddleName }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.Surname"/>
            </td>
            <td v-else>{{ patient.Surname }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.DOB"/>
            </td>
            <td v-else>{{ patient.DOB }}</td>
            
            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.MobilePhone"/>
            </td>
            <td v-else>{{ patient.MobilePhone }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.HomeTelephone"/>
            </td>
            <td v-else>{{ patient.HomeTelephone }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.Email"/>
            </td>
            <td v-else>{{ patient.Email }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.AddressLine1"/>
            </td>
            <td v-else>{{ patient.AddressLine1 }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.AddressLine2"/>
            </td>
            <td v-else>{{ patient.AddressLine2 }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.Hospital"/>
            </td>
            <td v-else>{{ patient.Hospital}}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.Ward"/>
            </td>
            <td v-else>{{ patient.Ward }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.PatientType"/>
            </td>
            <td v-else>{{ patient.PatientType }}</td>

            <td v-if="editing === patient._id">
                <input type="text" v-model="patient.DeviceID"/>
            </td>
            <td v-else>{{ patient.DeviceID }}</td>

            <td v-if="editing === patient._id">
                <button @click="editPatient(patient)">Save</button>
                <button class="muted-button" @click="cancelEdit(patient)">Cancel</button>
            </td>
            <td v-else>
                <button @click="editMode(patient)">Edit</button>
                <button @click="$emit('delete:patient', patient._id)">Delete</button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'patient-table',
    props: {
    patients: Array,
  },
  data(){
    return{
        editing:null
    }  
  },
  methods:{
      editMode(patient){
          this.cachedPatient = Object.assign({}, patient)
          this.editing = patient._id
      },
      editPatient(patient){
          if(patient.nic === '')return
          this.$emit('edit:Patient',patient._id,patient)
          this.editing=null
      },
      cancelEdit(patient){
          Object.assign(patient, this.cachedPatient)
          this.editing = null;
      }
  }
  }
</script>

<style scoped>
button{
        margin: 0 0.5 rem 0 0;
}
</style>