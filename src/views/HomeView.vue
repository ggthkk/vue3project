<template>
    <VRuntimeTemplate :template="template"></VRuntimeTemplate>
    <div v-show="show"><page></page></div>
</template>
<script>
import VRuntimeTemplate from 'vue3-runtime-template'
import { defineComponent, computed, methods } from 'vue'
import page from '../components/testcrad-compo.vue'

export default defineComponent({
    data() {
        return {
            test: computed(() => 10 + 10),
            test2: methods(() => 10 + 10),
            show: 0,
        }
    },
    setup() {
        return {
            name: 'wd',
            //test: computed(() => 10 + 10),
            template: `
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">num = {{ this.test }}</p>
    <button @click="sayHi()" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Click me
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>

</div>
<br /><br /><br />
<page></page>
		`,
        }
    },
    components: {
        VRuntimeTemplate,
        page,
    },
    methods: {
        sayHi() {
            this.num += 1
            console.log(this.num)
        },
    },
})
</script>
