import { ref } from 'vue'
export function test() {
    const plus = ref(0)
    const a = (item) => {
        item = plus.value++
        console.log(item)
    }
    return { a, plus }
}
