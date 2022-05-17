<template>
    <div class="student">
        <h2>Student Name: {{ name }}</h2>
        <h2>Student Age: {{ age }}</h2>
        <h2>{{ number }}</h2>
        <button @click="add">number++</button>
        <button @click="sendStudentName">Send Student name to app</button>
        <button @click="unbind">Unbind event</button>
        <button @click="death">Destory student info Vue instance</button>
    </div>
</template>

<script>

export default {
    name: 'StudentInfo',
    data() {
        return {
            name: 'Nick',
            age: 31,
            number: 0
        }
    },
    methods: {
        add(){
            console.log('add function is called');
            this.number++
        },
        sendStudentName(){
            // 触发Student组件实例身上的loveyou事件
            this.$emit('loveyou', this.name, 'params1', 2, 3)
            this.$emit('demo')
        },
        unbind(){
            // this.$off('loveyou') // 解绑一个事件
            this.$off(['loveyou', 'demo']) //解绑多个事件
            // this.$off() // 解绑所有的事件
        },
        death(){
            this.$destroy() // 销毁当前组件的实例对象 销毁后 studentInfo实例的自定义事件都不奏效 原生事件不受影响
        }
    }
}
</script>

<style scoped>
    .student{
        background-color: aqua;
        padding: 5px;
        margin-top: 10px;
    }
</style>
