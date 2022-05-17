<template>
    <div class="app">
        <h2>{{ msg }}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
        <SchoolInfo :getSchoolName="getSchoolName"/>
        <!-- 给StudentInfo的实例对象绑定了一个loveyou事件，只要loveyou事件被触发，demo就会被调用 -->
        <StudentInfo v-on:loveyou="getStudentName" @demo="m1" @click.native="show"/>
        <!-- 触发一次 -->
        <!-- <StudentInfo v-on:loveyou.once="getStudentName"/> -->

        <!-- <StudentInfo ref="student"/> -->
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
    },
    data() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        show(){
            alert('@@@')
        },
        getSchoolName(name){
            console.log('Get the school name: ', name);
        },
        getStudentName(name,...params){
            console.log("loveyou is called");
            console.log("Get the student name: ", name, params);
        },
        m1(){
            console.log('@@@@@@@');
        }
    },
    // mounted(){
    //     setTimeout(() => {
    //         this.$refs.student.$on('loveyou', this.getStudentName)
    //         // 触发一次
    //         // this.$refs.student.$once('loveyou', this.getStudentName)
    //     }, 3000);
    // }     
}
</script>

<style>
    .app{
        background-color: brown;
        padding: 5px;
    }
</style>