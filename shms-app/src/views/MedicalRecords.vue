<style scoped>
#headTable{
    margin-inline-start: 20pt;
}
</style>
<template>
    <div>
        <table id="headTable" class="ui celled table">
            <thead>
                <tr>
                    <th><h1 style="text-align:center;">Medical Records of </h1><h1 style="text-align:center;"><router-link :to="{ name: 'show', params: { id: this.$route.params.id }}">{{this.$route.params.id}}</router-link></h1></th>
                    <th><h1 style="text-align:center;"><router-link :to="{name:'new-medical-record',params:{id:this.$route.params.id}}">Add New Record</router-link></h1></th>
                </tr>
            </thead>
        </table>
        <table id="records" class="ui celled compact table">
            <thead>
                <tr>
                    <th>Condition</th>
                    <th>Assigned Doctor NIC</th>
                    <th>Diagnosed Date</th>
                    <th>Recovery Status</th>
                    <th>Recovered Date</th>
                    <th><i class="lock open icon"></i>Show</th>
                    <th><i class="trash icon"></i>Delete</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="(record,i) in records" :key="i">
                        <td>{{record.Condition}}</td>
                        <td><router-link :to="{name:'show-doctor', params:{id:record.AssignedDoctorNIC}}">{{record.AssignedDoctorNIC}}</router-link></td>
                        <td>{{record.DiagnosedDate}}</td>
                        <td>{{record.RecoveryStatus}}</td>
                        <td>{{record.RecoveredDate}}</td>
                        <td width="75" class="center aligned">
                            <router-link :to="{ name: 'show-medicalrecords', params: { id: record._id }}">Show</router-link>
                            
                        </td>
                        <td width="75" class="center aligned" @click.prevent="onDestroy(record._id)">
                            <a :href="`/patients/medicalrecords/${record._id}`">Delete</a>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
    name: 'medical-records',
    data(){
        return{
            records:[]
        };
    },
    methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletemedicalrecord(id);
      this.flash('patient deleted sucessfully!', 'success');
      this.records = await api.getmedicalrecordsofapatient(this.$route.params.id);
        }
    },
    async mounted(){
        this.records = await api.getmedicalrecordsofapatient(this.$route.params.id);
    }
}
</script>
