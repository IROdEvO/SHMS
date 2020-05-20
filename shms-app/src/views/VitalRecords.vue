<style scoped>
#headTable{
    margin-inline-start: 25pt;
}
</style>
<template>
    <div>
        <table id="headTable" class="ui celled compact table">
            <thead>
                <tr>
                    <th><h1 style="text-align:center;">Vital Records of </h1><h1 style="text-align:center;"><router-link :to="{ name: 'show', params: { id: this.$route.params.NIC }}">{{this.$route.params.NIC}}</router-link></h1></th>
                </tr>
            </thead>
        </table>
        <table id="records" class="ui celled compact table">
            <thead>
                <tr>
                    <th>Temperature</th>
                    <th>Pulse</th>
                    <th>Emergency Button Pressed</th>
                    <th>Temperature Condition</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="(record,i) in records" :key="i">
                        <td>{{record.Temperature}}</td>
                        <td>{{record.Pulse}}</td>
                        <td>{{record.EmergencyButtonPressed}}</td>
                        <td>{{record.TempCondition}}</td>
                        <td>{{record.Status}}</td>
                        <td>Lat: {{record.Lat}}<br/>Lng: {{record.Lng}}</td>
                        <td>{{record.Timestamp}}</td>
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
    methods:{
        getData(){
            setInterval(async ()=>{
                this.records = await api.getvitalrecords(this.$route.params.id);
            },10000)
        }
    },
    async mounted(){
        this.records = await api.getvitalrecords(this.$route.params.id);
        this.getData();
    },
    beforeDestroy(){
        clearInterval(this.getData())
    }
}
</script>
