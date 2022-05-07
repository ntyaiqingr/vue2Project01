<template>
    <div class="school">
        <h2>School Name: {{ name }}</h2>
        <h2>School Address: {{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: 'yigao',
            address: 'luoyang'
        }
    },
}
</script>

<style>
    .school{
        background-color: orange;
    }
</style>