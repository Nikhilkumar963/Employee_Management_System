import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmp = () =>  axios.get(REST_API_BASE_URL);

export const createEmp = (emp) => axios.post(REST_API_BASE_URL,emp)

export const getEmployee = (empId) => axios.get(REST_API_BASE_URL + '/' + empId)

export const updateEmployee = (empId,emp) => axios.put(REST_API_BASE_URL + '/' + empId,emp)

export const deletEmp = (empId) => axios.delete(REST_API_BASE_URL + '/'+ empId)