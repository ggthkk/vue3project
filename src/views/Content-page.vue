<template>
    <GetApidata v-slot="slotProps">
        <n-grid class="p-2" cols="2 l:3" :x-gap="12" :y-gap="8" responsive="screen">
            <n-grid-item v-for="(item, index) in slotProps.list" :key="index">
                <pre>{{}}</pre>

                <!--<n-card class="flex items-center">{{ item }}</n-card>-->
            </n-grid-item>
        </n-grid>
    </GetApidata>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GetApidata from '@/views/Api-data.vue'
export default defineComponent({
    components: {
        GetApidata,
    },
    data() {
        return {
            value: '',
        }
    },
})
</script>
