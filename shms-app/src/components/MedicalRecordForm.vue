<template>
    <div>
        <form id="inputForm" action="#" @submit.prevent="onSubmit">
            <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
            <div class="ui labeled input fluid">
            <div class="ui label">
            Condition
            </div>
            <input type="text"  placeholder="Enter Details" v-model="record.Condition"/>
            </div>

            <div class="ui labeled input fluid">
            <div class="ui label">
            Patient NIC
            </div>
            <input type="text" placeholder="Enter Details" v-model="record.BelongingPatientNIC"/>
            </div>

            <div class="ui labeled input fluid">
            <div class="ui label">
            Assigned Doctor
            </div>
            <input type="text"  placeholder="Enter Details" v-model="record.AssignedDoctorNIC"/>
            </div>

            <div class="ui labeled input fluid">
            <div class="ui label">
            Diagnosed Date
            </div>
            <input type="text"  placeholder="Enter Details" v-model="record.DiagnosedDate"/>
            </div>

            <div class="ui labeled input fluid">
            <div class="ui label">
            Recovery Status
            </div>
            <input type="text"  placeholder="Enter Details" v-model="record.RecoveryStatus"/>
            </div>

            <div class="ui labeled input fluid">
            <div class="ui label">
            Details
            </div>
            <textarea rows="10" cols="50" placeholder="Enter Details" form="inputForm" v-model="record.Details"></textarea>
            </div>
            
            <div class="ui labeled input fluid">
            <div class="ui label">
            Recovered Date
            </div>
            <input type="text"  placeholder="Enter Details" v-model="record.RecoveredDate"/>
            </div>
            <button class="positive ui button">Submit</button>
        </form>
        
    </div>
</template>
<script>
export default {
    name:'medicalrecord-form',
    props:{
        record:{
            type : Object,
            required: false,
            default:()=>{
                return{
                    Condition:'',
                    AssignedDoctorNIC:'',
                    BelongingPatientNIC:'',
                    DiagnosedDate:'',
                    RecoveryStatus:'',
                    Details:'',
                    RecoveredDate:''
                };
            }
        }
    },
    data(){
        return{
            errorsPresent : false
        };
    },
    methods:{
        onSubmit:function(){
            if(this.record.Condition === '' ||
            this.record.AssignedDoctorNIC === '' ||
            this.record.BelongingPatientNIC === '' ||
            this.record.DiagnosedDate === '' ||
            this.record.RecoveryStatus === ''||
            this.record.Details === ''){
                this.errorsPresent = true;
            }else{
                this.$emit('createOrUpdate',this.record);
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