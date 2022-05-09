<template>
    <div>
        <SchoolInfo/>
        <StudentInfo/>
    </div>
</template>

<script>
import StudentInfo from './components/StudentInfo.vue'
import SchoolInfo from './components/SchoolInfo.vue'

export default {
    name: 'App',
    components: {
        StudentInfo,
        SchoolInfo
    }
}
</script>

<style>

</style>