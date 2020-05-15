<template>
  <div id="patient-form">
    <form @submit.prevent="handleSubmit">

    <label>Patient NIC</label>
      <input type="text" v-model="patient.nic" 
      ref="first"
      :class="{ 'has-error': submitting && invalidNIC }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
      <label>First name</label>
      <input type="text" v-model="patient.firstname" 
      :class="{ 'has-error': submitting && invalidFirstName }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Middle name</label>
      <input type="text" v-model="patient.middlename" 
      :class="{ 'has-error': submitting && invalidMiddleName }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Surname</label>
      <input type="text" v-model="patient.surname" 
      :class="{ 'has-error': submitting && invalidSurname }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />

    <label>DOB</label>
      <input type="text" v-model="patient.dob" 
      :class="{ 'has-error': submitting && invalidDOB }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Mobile</label>
      <input type="text" v-model="patient.mobile" 
      :class="{ 'has-error': submitting && invalidMobile }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
    <label>Home</label>
      <input type="text" v-model="patient.home" 
      :class="{ 'has-error': submitting && invalidHome }"
        @focus="clearStatus"
        @keypress="clearStatus"
    />
      <label>Email</label>
      <input type="text" v-model="patient.email" 
      :class="{ 'has-error': submitting && invalidEmail }"
      @focus="clearStatus"/>

      <label>Address Line 1</label>
      <input type="text" v-model="patient.addressline1" 
      :class="{ 'has-error': submitting && invalidAddressLine1 }"
      @focus="clearStatus"/>

      <label>Address Line 2</label>
      <input type="text" v-model="patient.addressline2" 
      :class="{ 'has-error': submitting && invalidAddressLine2 }"
      @focus="clearStatus"/>

      <label>Hospital</label>
      <input type="text" v-model="patient.hospital" 
      :class="{ 'has-error': submitting && invalidHospital }"
      @focus="clearStatus"/>

      <label>Ward</label>
      <input type="text" v-model="patient.ward" 
      :class="{ 'has-error': submitting && invalidWard }"
      @focus="clearStatus"/>

      <label>Type</label>
      <input type="text" v-model="patient.type" 
      :class="{ 'has-error': submitting && invalidType }"
      @focus="clearStatus"/>

      <label>Device ID</label>
      <input type="text" v-model="patient.deviceid" 
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
          firstname: '',
          middlename:'',
          surname:'',
          email: '',
          nic:'',
          dob:'',
          mobile:'',
          home:'',
          addressline1:'',
          addressline2:'',
          hospital:'',
          ward:'',
          type:'',
          deviceid:''
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
                firstname: '',
                middlename:'',
                surname:'',
                email: '',
                nic:'',
                dob:'',
                mobile:'',
                home:'',
                addressline1:'',
                addressline2:'',
                hospital:'',
                ward:'',
                type:'',
                deviceid:''
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
            return this.patient.nic === ''
        },
        invalidFirstName() {
            return this.patient.firstname === ''
        },
        invalidMiddleName() {
            return this.patient.middlename === ''
        },
        invalidSurname() {
            return this.patient.surname === ''
        },

        invalidDOB(){return this.patient.dob === ''},
        invalidMobile(){return this.patient.mobile === ''},
        invalidHome(){return this.patient.home === ''},
        invalidAddressLine1(){return this.patient.addressline1 === ''},
        invalidAddressLine2(){return this.patient.addressline2 === ''},
        invalidHospital(){return this.patient.hospital === ''},
        invalidWard(){return this.patient.ward === ''},
        invalidType(){return this.patient.type === ''},
        invalidDeviceID(){return this.patient.deviceid === ''},





         invalidEmail() {
            return this.patient.email === ''
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