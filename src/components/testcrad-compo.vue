<template>
    <div
        class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div class="mb-6">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >v-model input</label
                >
                <input
                    type="text"
                    v-model="testvalue"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <p class="bg-gray-50 text-gray-900">Data = {{ testvalue }}</p>
            </div>
            <div class="mb-6">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Default input1</label
                >
                <input
                    type="text"
                    v-model="input1"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Default input2</label
                >
                <input
                    type="text"
                    v-model="input2"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p class="bg-gray-50 text-gray-900">Sum = {{ sum }}</p>
            </div>
            <button class="button" @click="btsum()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sum: 0,
            testvalue: '',
        }
    },
    setup() {
        return {
            input1: '',
            input2: '',
        }
    },
    methods: {
        btsum() {
            this.sum = parseFloat(this.input1) + parseFloat(this.input2)
            console.log(this.sum)
        },
    },
}
</script>

<style scoped>
.button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
