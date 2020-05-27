<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
   <p v-if="invalidEmail" class="error">Enter a valid email</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
      NIC
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.NIC' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   First Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.FirstName' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   Middle Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.MiddleName' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Last Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.Surname' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    DOB
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.DOB' />
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
    Mobile Phone
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.MobilePhone' />
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
    Home Telephone
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.HomeTelephone' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Email
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.Email' />
    </div>
       <p v-if="invalidEmail" class="error">Enter a valid email</p>
    <div class="ui labeled input fluid">
      <div class="ui label">
    Address Line 1
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.AddressLine1' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Address Line 2
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.AddressLine2' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Hospital
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.Hospital' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Ward
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.Ward' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Device ID
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.DeviceID' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Patient Type
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.PatientType' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Password
      </div>
      <input type="text" placeholder="Enter Details" v-model='patient.Password' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Account Type
      </div>
      <input type="text" readonly placeholder="Enter Details" v-model='patient.AccountType'/>
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'patient-form',
  props: {
    patient: {
      type: Object,
      required: false,
      default: () => {
        return {
          NIC: '',
          FirstName: '',
          MiddleName:'',
          Surname:'',
          DOB:'',
          MobilePhone:'',
          HomeTelephone:'',
          Email:'',
          AddressLine1:'',
          AddressLine2:'',
          Hospital:'',
          Ward:'',
          DeviceID:'',
          PatientType:'',
          Password:'',
          AccountType:'Patient'
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false,
      email:this.patient.Email,
      reg:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    };
  },
  methods: {
    onSubmit: function() {
       
      if(!this.reg.test(this.email)){
        this.invalidEmail = true;
      } 
      if (this.patient.NIC === '' ||this.patient.FirstName === '' || 
      this.patient.MiddleName === '' ||
      this.patient.Surname === '' ||
      this.patient.DOB === '' ||
      this.patient.MobilePhone === '' ||
      this.patient.HomeTelephone === '' ||
      this.patient.Email === '' ||
      this.patient.AddressLine1 === '' ||
      this.patient.AddressLine2 === '' ||
      this.patient.Hospital === '' ||
      this.patient.Ward === '' ||
      this.patient.DeviceID === '' || 
      this.patient.PatientType === '' ||
      this.patient.Password === ''||this.patient.AccountType === '') {
        this.errorsPresent = true;
      }else {
        this.$emit('createOrUpdate', this.patient);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>