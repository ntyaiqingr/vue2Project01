<template>
    <div class="demo">
        <h2>School Name: {{ name }}</h2>
        <h2>School Address: {{ address }}</h2>
        <button @click="sendSchoolName">Transfer School Name to App</button>
    </div>
</template>

<script>
export default {
    name: 'SchoolInfo',
    props: ['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name);
        }
    },
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
        padding: 5px;
    }
</style>
