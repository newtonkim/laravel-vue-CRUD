
 <template>
    
   <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        
    <table class="min-w-full border divide-y divide-gray-200">
        <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                        Name
                    </span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                       Email
                    </span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                       Address
                    </span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                       Website
                    </span>
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in companies" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.address }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.website }}
                    </td>
                </tr>

            </template>
        </tbody>
    </table>
   </div>
    
</template>

<script>
import useCompanies from '../../composables/companies';
import { onMounted } from 'vue';

export default {
    setup() {
        const { companies, getCompanies } = useCompanies()

        onMounted(getCompanies)
        
        return {
            companies
           } 
        }
    }
</script>

<style scoped>

</style>