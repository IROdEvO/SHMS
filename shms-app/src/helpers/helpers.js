import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:5000/users/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getuser: handleError(async (id) => {
    const res = await axios.get(baseURL + id);
    console.log(baseURL+id);
    console.log(res.data);
    return res.data;
  }),
  getpatients: handleError(async () => {
    const res = await axios.get(baseURL+'accounttype/Patient');
    console.log(res.data);
    return res.data;
  }),
  getdoctors: handleError(async () => {
    const res = await axios.get(baseURL+'accounttype/Doctor');
    console.log(res.data);
    return res.data;
  }),
  deleteuser: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createuser: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateuser: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }),
  getmedicalrecordsofapatient: handleError(async id=>{
    const res = await axios.get('http://localhost:5000/medicalrecords/patient/'+id);
    return res.data;
  }),
  getassignedmedicalrecords: handleError(async id=>{
    const res = await axios.get('http://localhost:5000/medicalrecords/doctor/'+id);
    return res.data;
  }),
  getamedicalrecord: handleError(async (id)=>{
    const res = await axios.get('http://localhost:5000/medicalrecords/'+id);
    return res.data;
  }),
  deletemedicalrecord: handleError(async id=>{
    const res = await axios.delete('http://localhost:5000/medicalrecords/'+id);
    return res.data;
  }),
  updatemedicalrecord: handleError(async payload=>{
    const res = await axios.put('http://localhost:5000/medicalrecords/'+payload._id,payload);
    return res.data;
  }),
  createmedicalrecord: handleError(async payload=>{
    const res = await axios.post('http://localhost:5000/medicalrecords/',payload);
    return res.data;
  }),
  getvitalrecords: handleError(async id=>{
    const res = await axios.get('http://localhost:5000/vitalrecords/'+id);
    return res.data;
  })
};