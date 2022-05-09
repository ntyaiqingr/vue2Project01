<template>
    <div>
        <h2>Student Name: {{ name }}</h2>
        <h2>Student Age: {{ age }}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default {
    name: 'StudentInfo',
    data() {
        return {
            name: 'Nick',
            age: 31
        }
    }
}
</script>
