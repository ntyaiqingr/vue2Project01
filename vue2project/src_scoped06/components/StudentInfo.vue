<template>
    <div class="demo">
        <h2>Student Name: {{ name }}</h2>
        <h2>Student Age: {{ age }}</h2>
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

<style scoped>
    .demo{
        background-color: aqua;
    }
</style>
