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
        <tr v-for="patient in patients" :key="patient.id">
            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.nic"/>
            </td>
            <td v-else>{{patient.nic}}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.firstname"/>
            </td>
          <td v-else>{{ patient.firstname }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.middlename"/>
            </td>
            <td v-else>{{ patient.middlename }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.surname"/>
            </td>
            <td v-else>{{ patient.surname }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.dob"/>
            </td>
            <td v-else>{{ patient.dob }}</td>
            
            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.mobile"/>
            </td>
            <td v-else>{{ patient.mobile }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.home"/>
            </td>
            <td v-else>{{ patient.home }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.email"/>
            </td>
            <td v-else>{{ patient.email }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.addressline1"/>
            </td>
            <td v-else>{{ patient.addressline1 }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.addressline2"/>
            </td>
            <td v-else>{{ patient.addressline2 }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.hospital"/>
            </td>
            <td v-else>{{ patient.hospital}}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.ward"/>
            </td>
            <td v-else>{{ patient.ward }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.type"/>
            </td>
            <td v-else>{{ patient.type }}</td>

            <td v-if="editing === patient.id">
                <input type="text" v-model="patient.deviceid"/>
            </td>
            <td v-else>{{ patient.deviceid }}</td>

            <td v-if="editing === patient.id">
                <button @click="editPatient(patient)">Save</button>
                <button class="muted-button" @click="cancelEdit(patient)">Cancel</button>
            </td>
            <td v-else>
                <button @click="editMode(patient)">Edit</button>
                <button @click="$emit('delete:patient', patient.id)">Delete</button>
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
          this.editing = patient.id
      },
      editPatient(patient){
          if(patient.nic === '')return
          this.$emit('edit:Patient',patient.id,patient)
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