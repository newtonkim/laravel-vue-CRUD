import axios from "axios"
import { ref } from "vue"

export default function useCompanies() {

    const companies = ref([])
    
    const  getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }
    return {
        companies,
        getCompanies
    }
}