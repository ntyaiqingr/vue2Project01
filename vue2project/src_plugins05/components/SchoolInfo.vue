<template>
    <div>
        <h2>School Name: {{ name | mySlice }}</h2>
        <h2>School Address: {{ address }}</h2>
        <button @click="test">Click me to test</button>
    </div>
</template>

<script>
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: 'YiGao',
            address: 'luoyang'
        }
    },
    methods: {
        test(){
            this.hello()
        }
    }
}
</script>
