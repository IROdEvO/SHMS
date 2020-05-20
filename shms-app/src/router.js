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
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/patients'
    },
    {
      path: '/patients',
      name: 'patients',
      component: Patients
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: Doctors
    },
    {
      path: '/patients/new',
      name: 'new-patient',
      component: New
    },
    {
      path: '/doctors/new',
      name: 'new-doctor',
      component: NewDoctor
    },
    {
      path: '/patients/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/doctors/:id',
      name: 'show-doctor',
      component: ShowDoctor
    },
    {
      path: '/patients/:id/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/doctors/:id/edit',
      name: 'edit-doctor',
      component: EditDoctor
    },
    {
      path: '/patients/medicalrecords/:id',
      name: 'medical-records',
      component: MedicalRecords
    },
    {
      path: '/patients/vitalrecords/:id/:NIC',
      name: 'vital-records',
      component: VitalRecords
    },
    {
      path: '/doctors/medicalrecords/:id',
      name: 'assigned-medical-records',
      component: AssignedMedicalRecords
    },
    {
      path: '/patients/medicalrecords/:id/new',
      name: 'new-medical-record',
      component: NewMedicalRecord
    },
    {
      path: '/patients/medicalrecords/:id/show',
      name: 'show-medicalrecords',
      component: ShowMedicalRecords
    },
    {
      path: '/patients/medicalrecords/:id/edit',
      name: 'edit-medical-record',
      component:EditMedicalRecord
    }
   
  ]
});