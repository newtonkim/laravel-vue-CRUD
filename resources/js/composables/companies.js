import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router";

export default function useCompanies() {

    // this makes it reactive/dynamic
    const companies = ref([])
    const router = useRouter();
    const  errors= ref('')


    // get companies method/function
    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }
    // store/method
    // const storeCompany = async (data) => {
    //     console.log(data);
    //     await axios.post('/api/companies', data)
    //     await router.push({name: 'companies.index'})
    // }

    const storeCompany = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/companies', data)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }


    // destroy/delete method
    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }
    // // update/delete method
    // const updateCompany = async (id) => {
    //     await axios.delete('/api/companies/' + id)
    // }
    return {
        companies,
        errors,
        getCompanies,
        storeCompany,
        destroyCompany
    }
}