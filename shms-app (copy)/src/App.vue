<template>
  <div id="app" class="small-container">
    <h1 style="text-align:center">SMART HEALTH MONITORING SYSTEM</h1>
     <h2>Register Patients</h2>
    <patient-form @add:patient="addPatient"/>
    <patient-table :patients="patients" @delete:patient="deletePatient" @edit:patient="editPatient"/>

  </div>
</template>

<script>
  import PatientTable from '@/components/PatientTable.vue'
  import PatientForm from '@/components/PatientForm.vue'


export default {
  name: 'App',
  components: {
    PatientTable,
    PatientForm
  },
  data(){
    return {
      patients: [
       
      ],
    }
  },
  mounted(){
    this.getPatients()
  },
  methods:{
    addPatient(patient) {
      this.patients = [...this.patients, patient];
    },
    deletePatient(_id){
      this.patients = this.patients.filter(
      patient => patient._id !== _id)
    },
    editEmployee(_id, updatedPatient){
      this.patients=this.patients.map(
        patient => 
        patient._id === _id ? updatedPatient : patient
      )
    },
    async getPatients(){
          try {
            const response = await fetch('http://localhost:5000/users/accounttype/Patient')
            const data = await response.json()
            this.patients = data
          } catch (error) {
            console.error(error)
          }
    }
  },
}
</script>

<style>
 button {
    background: #009435;
    border: 1px solid #009435;
  }
  h1{
    color: crimson;
  }

  .small-container {
    max-width: 100%;
    float: left;
  }
</style>
