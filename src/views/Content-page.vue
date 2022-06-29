<template>
    <n-grid class="p-2" cols="2 l:3" :x-gap="12" :y-gap="8" responsive="screen">
        <n-grid-item v-for="(item, index) in list" :key="index">
            <n-card class="flex items-center">
                Email :{{ item.email }} <br />firstname :{{ item.first_name }} <br />lastname :{{ item.last_name }}
                <br />Picture :
                <n-image-group show-toolbar-tooltip>
                    <n-space>
                        <n-image :src="item.avatar" />
                    </n-space> </n-image-group
            ></n-card>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
    data() {
        return { list: [] }
    },
    async mounted() {
        const result = await axios.get('https://reqres.in/api/users?page=1')
        console.log('Data', result.data.data)
        this.list = result.data.data
    },
})
</script>
