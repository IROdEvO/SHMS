<style scoped>
#headTable{
    margin-inline-start: 25pt;
}
</style>
<template>
    
    <div>
        <go-top></go-top>
        
                    <th><h1>Vital Records of <router-link :to="{ name: 'show', params: { id: this.$route.params.NIC }}">{{this.$route.params.NIC}}</router-link></h1></th>
          
        
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
                        <td><router-link :to="{name:'location',params:{lat:record.Lat,lng:record.Lng}}">Lat: {{record.Lat}}<br/>Lng: {{record.Lng}}</router-link></td>
                        <td>{{record.Timestamp}}</td>
                    </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
import { api } from '../helpers/helpers';
import GoTop from '@inotom/vue-go-top';
export default {
    name: 'medical-records',
    components:{
        GoTop
    },
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
        clearInterval(this.getData());
    }
}
</script>
