<style scoped>
#headTable{
    margin-inline-start: 20pt;
}
</style>
<template>
    <div>
        <go-top></go-top>
        <table id="records" class="ui celled compact table">
            <thead>
                <tr>
                    <th>Condition</th>
                    <th>Patient NIC</th>
                    <th>Diagnosed Date</th>
                    <th>Recovery Status</th>
                    <th>Recovered Date</th>
                    <th><i class="lock open icon"></i>Show</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="(record,i) in records" :key="i">
                        <td>{{record.Condition}}</td>
                        <td><router-link :to="{name:'show', params:{id:record.BelongingPatientNIC}}">{{record.BelongingPatientNIC}}</router-link></td>
                        <td>{{record.DiagnosedDate}}</td>
                        <td>{{record.RecoveryStatus}}</td>
                        <td>{{record.RecoveredDate}}</td>
                        <td width="75" class="center aligned">
                            <router-link :to="{ name: 'show-medicalrecords', params: { id: record._id }}">Show</router-link>
                            
                        </td>

                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';
import { api } from '../helpers/helpers';
export default {
    name: 'assigned-medical-records',
    components:{
        GoTop
    },
    data(){
        return{
            records:[]
        };
    },
    async mounted(){
        this.records = await api.getassignedmedicalrecords(this.$route.params.id);
    }
}
</script>
