<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
      NIC
      </div>
      <input type="text" placeholder="Enter Details" v-model="doctor.NIC" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   First Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.FirstName' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   Middle Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.MiddleName' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Last Name
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.Surname' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    DOB
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.DOB' />
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
    Mobile Phone
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.MobilePhone' />
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
    Home Telephone
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.HomeTelephone' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Email
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.Email' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Address Line 1
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.AddressLine1' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Address Line 2
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.AddressLine2' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Hospital
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.Hospital' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Ward
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.Ward' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Area of Expertise
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.AreaOfExpertise' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Password
      </div>
      <input type="text" placeholder="Enter Details" v-model='doctor.Password' />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
    Account Type
      </div>
      <input type="text" readonly placeholder="Enter Details" v-model='doctor.AccountType'/>
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'doctor-form',
  props: {
    doctor: {
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
          AreaOfExpertise:'',
          Password:'',
          AccountType:'Doctor'
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.doctor.NIC === '' ||this.doctor.FirstName === '' || 
      this.doctor.Surname === '' ||
      this.doctor.DOB === '' ||
      this.doctor.MobilePhone === '' ||
      this.doctor.HomeTelephone === '' ||
      this.doctor.Email === '' ||
      this.doctor.AddressLine1 === '' ||
      this.doctor.AddressLine2 === '' ||
      this.doctor.Hospital === '' ||
      this.doctor.Ward === '' ||
      this.doctor.AreaOfExpertise === '' || 
      this.doctor.Password === ''||this.doctor.AccountType === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.doctor);
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