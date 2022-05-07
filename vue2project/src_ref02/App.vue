<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">Click me to show DOM above</button>
        <SchoolInfo ref="sch"></SchoolInfo>
    </div>
</template>

<script>
import SchoolInfo from '../src/components/SchoolInfo.vue'
export default {
    name: 'App',
    data() {
        return {
            msg: 'welcome to Vue'
        }
    },
    components: {
        SchoolInfo
    },
    methods: {
        showDOM(){
            console.log("@", this.$refs.title) // 真实DOM元素
            console.log("@@", this.$refs.btn) // 真实DOM元素
            console.log("@@@", this.$refs.sch) // SchoolInfo组件的实例对象
        }
    },
}
</script>

<style>

</style>