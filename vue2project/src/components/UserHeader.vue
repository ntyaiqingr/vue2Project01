<template>
    <div class="todo-header">
        <input type="text" placeholder="Please enter you task name and press enter" v-model="title" @keyup.enter="addTask">
    </div>
</template>

<script>
    import { nanoid } from "nanoid";
    export default {
        name: 'UserHeader',
        props:['addTodo'],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addTask(){
                // 判断空值
                if (!this.title) {
                    return alert('please enter a title')
                }
                // 将用户输入的包装成一个对象
                const todoObj = {
                    id: nanoid(),
                    title: this.title,
                    completed: false
                }
                // 通知App组件去添加一个todo对象
                this.addTodo(todoObj)
                // 清空输入
                this.title = ''
            }
        },
        
    }
</script>

<style scoped>
    /* header */
    .todo-header input{
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.2);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>