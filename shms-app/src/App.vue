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
       /* {
          id: 1,
          name: 'Richard Hendricks',
          email: 'richard@piedpiper.com',
        },
        {
          id: 2,
          name: 'Bertram Gilfoyle',
          email: 'gilfoyle@piedpiper.com',
        },
        {
          id: 3,
          name: 'Dinesh Chugtai',
          email: 'dinesh@piedpiper.com',
        },*/
      ],
    }
  },
  methods:{
    addPatient(patient) {
      const lastId =
        this.patients.length > 0
          ? this.patients[this.patients.length - 1].id
          : 0;
        const id = lastId + 1;
        const newPatient = { ...patient, id };

      this.patients = [...this.patients, newPatient];
    },
    deletePatient(id){
      this.patients = this.patients.filter(
      patient => patient.id !== id)
    },
    editEmployee(id, updatedPatient){
      this.patients=this.patients.map(
        patient => 
        patient.id === id ? updatedPatient : patient
      )
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
