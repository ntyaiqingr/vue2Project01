<template>
    <div class="demo">
        <h2>School Name: {{ name | mySlice }}</h2>
        <h2>School Address: {{ address }}</h2>
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
    }
}
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>
