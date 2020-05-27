<template>
    <div>
        <go-top></go-top>
        <table  class="ui celled compact table">
            <thead>
                <th>Patient</th>
                <th>Temp</th>
                <th>BP</th>
                <th>EBP</th>
                <th>TC</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr v-for="(record,i) in records1" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>  
                <tr v-for="(record,i) in records2" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>  
                <tr v-for="(record,i) in records3" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>  
                <tr v-for="(record,i) in records4" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>  
                <tr v-for="(record,i) in records5" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>  
                <tr v-for="(record,i) in records6" :key="i">
                    <td>{{record.AssignedPatientNIC}}</td>
                    <td>{{record.Temperature}}</td>
                    <td>{{record.Pulse}}</td>
                    <td>{{record.EmergencyButtonPressed}}</td>
                    <td>{{record.TempCondition}}</td>
                    <td>{{record.Status}}</td>
                </tr>    
            </tbody>
        </table>
    </div>
</template>
<script>
import { api } from '../helpers/helpers';
import GoTop from '@inotom/vue-go-top';
export default {
    name:'dashboard',
    components:{
        GoTop
    },
    data(){
        return{
            records1:[],
            records2:[],
            records3:[],
            records4:[],
            records5:[],
            records6:[],
            patients:[]
        };
    },
    methods:{
        getData1(){
            setInterval(async ()=>{
                this.records1 = await api.getlatestvitalrecordbydevice('d1');
            },10000)
        },
        getData2(){
            setInterval(async ()=>{
                this.records2 = await api.getlatestvitalrecordbydevice('d2');
            },10000)
        },
        getData3(){
            setInterval(async ()=>{
                this.records3 = await api.getlatestvitalrecordbydevice('d3');
            },10000)
        },
        getData4(){
            setInterval(async ()=>{
                this.records4 = await api.getlatestvitalrecordbydevice('d4');
            },10000)
        },
        getData5(){
            setInterval(async ()=>{
                this.records5 = await api.getlatestvitalrecordbydevice('d5');
            },10000)
        },
        getData6(){
            setInterval(async ()=>{
                this.records6 = await api.getlatestvitalrecordbydevice('d6');
            },10000)
        }
    },
    async mounted(){
        this.patients = await api.getpatients();
        this.records1 = await api.getlatestvitalrecordbydevice('d1');
        this.records2 = await api.getlatestvitalrecordbydevice('d2');
        this.records3 = await api.getlatestvitalrecordbydevice('d3');
        this.records4 = await api.getlatestvitalrecordbydevice('d4');
        this.records5 = await api.getlatestvitalrecordbydevice('d5');
        this.records6 = await api.getlatestvitalrecordbydevice('d6');
        this.getData1();
        this.getData2();
        this.getData3();
        this.getData4();
        this.getData5();
        this.getData6();
    },
    beforeDestroy(){
        clearInterval(this.getData1());
        clearInterval(this.getData2());
        clearInterval(this.getData3());
        clearInterval(this.getData4());
        clearInterval(this.getData5());
        clearInterval(this.getData6());
    }
}
</script>
<style scoped>

</style>