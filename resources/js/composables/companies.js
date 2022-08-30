import axios from "axios"
import { ref } from "vue"

export default function useCompanies() {

    const companies = ref([])// this makes it reactive/dynamic

    // get companies method/function
    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    // destroy/delete method
    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }
    // // create/delete method
    // const createCompany = async (id) => {
    //     await axios.delete('/api/companies/' + id)
    // }
    // // update/delete method
    // const updateCompany = async (id) => {
    //     await axios.delete('/api/companies/' + id)
    // }
    return {
        companies,
        getCompanies,
        destroyCompany
    }
}