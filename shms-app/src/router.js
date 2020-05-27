import Vue from 'vue';
import Router from 'vue-router';
import Patients from './views/Patients.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import MedicalRecords from './views/MedicalRecords.vue';
import ShowMedicalRecords from './views/ShowMedicalRecords.vue';
import EditMedicalRecord from './views/EditMedicalRecord.vue';
import NewMedicalRecord from './views/NewMedicalRecord.vue';
import Doctors from './views/Doctors.vue';
import NewDoctor from './views/NewDoctor.vue';
import ShowDoctor from './views/ShowDoctor.vue';
import EditDoctor from './views/EditDoctor.vue';
import AssignedMedicalRecords from './views/AssignedMedicalRecords.vue';
import VitalRecords from './views/VitalRecords.vue';
import Gmaps from './views/Gmaps.vue';
import VitalDashboard from './views/VitalDashboard.vue';
import LoginPage from './views/LoginPage.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      name:'login-page',
      component:LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: VitalDashboard,
      meta:{
        guest:true
      }
    },
    {
      path: '/patients',
      name: 'patients',
      component: Patients,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: Doctors,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/new',
      name: 'new-patient',
      component: New,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/doctors/new',
      name: 'new-doctor',
      component: NewDoctor,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/:id',
      name: 'show',
      component: Show,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/doctors/:id',
      name: 'show-doctor',
      component: ShowDoctor,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/:id/edit',
      name: 'edit',
      component: Edit,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/doctors/:id/edit',
      name: 'edit-doctor',
      component: EditDoctor
    },
    {
      path: '/patients/medicalrecords/:id',
      name: 'medical-records',
      component: MedicalRecords,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/vitalrecords/:id/:NIC',
      name: 'vital-records',
      component: VitalRecords,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/vitalrecords/:id/:NIC/location/:lat/:lng',
      name: 'location',
      component: Gmaps,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/doctors/medicalrecords/:id',
      name: 'assigned-medical-records',
      component: AssignedMedicalRecords,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/medicalrecords/:id/new',
      name: 'new-medical-record',
      component: NewMedicalRecord,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/medicalrecords/:id/show',
      name: 'show-medicalrecords',
      component: ShowMedicalRecords,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/patients/medicalrecords/:id/edit',
      name: 'edit-medical-record',
      component:EditMedicalRecord,
      meta:{
        requiresAuth:true
      }
    }
   
  ]
});