<template>
    <div>
        <StudentInfo msg="I miss you, Qing" target="YeQing"/>
    </div>
</template>

<script>
import StudentInfo from './components/StudentInfo.vue'
export default {
    name: 'App',
    data() {
        return {
            msg: 'welcome to Vue'
        }
    },
    components: {
        StudentInfo
    }
}
</script>

<style>

</style>