<template>
  <div id="patient-form">
    <form @submit.prevent="handleSubmit">

    <label>Patient NIC</label>
      <input type="text" v-model="patient.NIC" 
      ref="first"
      :class="{ 'has-error': submitting && invalidNIC }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
      <label>First name</label>
      <input type="text" v-model="patient.FirstName" 
      :class="{ 'has-error': submitting && invalidFirstName }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Middle name</label>
      <input type="text" v-model="patient.MiddleName" 
      :class="{ 'has-error': submitting && invalidMiddleName }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Surname</label>
      <input type="text" v-model="patient.Surname" 
      :class="{ 'has-error': submitting && invalidSurname }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />

    <label>DOB</label>
      <input type="text" v-model="patient.DOB" 
      :class="{ 'has-error': submitting && invalidDOB }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Mobile</label>
      <input type="text" v-model="patient.MobilePhone" 
      :class="{ 'has-error': submitting && invalidMobile }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Home</label>
      <input type="text" v-model="patient.HomeTelephone" 
      :class="{ 'has-error': submitting && invalidHome }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
      <label>Email</label>
      <input type="text" v-model="patient.Email" 
      :class="{ 'has-error': submitting && invalidEmail }"
      @focus="clearStatus"/>

      <label>Address Line 1</label>
      <input type="text" v-model="patient.AddressLine1" 
      :class="{ 'has-error': submitting && invalidAddressLine1 }"
      @focus="clearStatus"/>

      <label>Address Line 2</label>
      <input type="text" v-model="patient.AddressLine2" 
      :class="{ 'has-error': submitting && invalidAddressLine2 }"
      @focus="clearStatus"/>

      <label>Hospital</label>
      <input type="text" v-model="patient.Hospital" 
      :class="{ 'has-error': submitting && invalidHospital }"
      @focus="clearStatus"/>

      <label>Ward</label>
      <input type="text" v-model="patient.Ward" 
      :class="{ 'has-error': submitting && invalidWard }"
      @focus="clearStatus"/>

      <label>Type</label>
      <input type="text" v-model="patient.PatientType" 
      :class="{ 'has-error': submitting && invalidType }"
      @focus="clearStatus"/>

      <label>Device ID</label>
      <input type="text" v-model="patient.DeviceID" 
      :class="{ 'has-error': submitting && invalidDeviceID }"
      @focus="clearStatus"/>


        <p v-if="error && submitting" class="error-message">
            ❗Please fill out all required fields
        </p>
        <p v-if="success" class="success-message">
            ✅ Patient successfully added
        </p>
      <button>Add Patient</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'patient-form',
    data() {
      return {
          submitting:false,
          error:false,
          success:false,
        patient: {
          FirstName: '',
          MiddleName:'',
          Surname:'',
          Email: '',
          NIC:'',
          DOB:'',
          MobilePhone:'',
          HomeTelephone:'',
          AddressLine1:'',
          AddressLine2:'',
          Hospital:'',
          Ward:'',
          PatientType:'',
          DeviceID:''
        },
      }
    },
    methods:{
        handleSubmit() {
            this.submitting = true
            this.clearStatus()
            if (this.invalidNIC||this.invalidFirstName || this.invalidMiddleName ||this.invalidSurname|| 
            this.invalidEmail||this.invalidMobile||this.invalidHome||this.invalidDOB||
            this.invalidAddressLine1||this.invalidAddressLine2||this.invalidHospital
            ||this.invalidWard||this.invalidType||this.invalidDeviceID) {
                this.error = true
                return
             }
            this.$emit('add:patient', this.patient)
            this.$refs.first.focus()
            this.patient = {
                FirstName: '',
                MiddleName:'',
                Surname:'',
                Email: '',
                NIC:'',
                DOB:'',
                MobilePhone:'',
                HomeTelephone:'',
                AddressLine1:'',
                AddressLine2:'',
                Hospital:'',
                Ward:'',
                PatientType:'',
                DeviceID:''
            }
            this.error = false
            this.success = true
            this.submitting = false
         },
         clearStatus(){
             this.success = false
             this.error = false
         }
    },
    computed:{
        invalidNIC(){
            return this.patient.NIC === ''
        },
        invalidFirstName() {
            return this.patient.FirstName === ''
        },
        invalidMiddleName() {
            return this.patient.MiddleName === ''
        },
        invalidSurname() {
            return this.patient.Surname === ''
        },

        invalidDOB(){return this.patient.DOB === ''},
        invalidMobile(){return this.patient.MobilePhone === ''},
        invalidHome(){return this.patient.HomeTelephone === ''},
        invalidAddressLine1(){return this.patient.AddressLine1 === ''},
        invalidAddressLine2(){return this.patient.AddressLine2 === ''},
        invalidHospital(){return this.patient.Hospital === ''},
        invalidWard(){return this.patient.Ward === ''},
        invalidType(){return this.patient.PatientType === ''},
        invalidDeviceID(){return this.patient.DeviceID === ''},





         invalidEmail() {
            return this.patient.Email === ''
        },
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>