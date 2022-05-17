<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <UserHeader :addTodo="addTodo"/>
                <TaskList :todos="todos" 
                :checkTodo="checkTodo" 
                :deleteTodo="deleteTodo"/>
                <UserFooter :todos="todos" 
                :checkAllTodo="checkAllTodo"
                :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import UserHeader from './components/UserHeader.vue'
    import UserFooter from './components/UserFooter.vue'
    import TaskList from './components/TaskList.vue'

    export default {
        name: 'App',
        components: {
            UserHeader,
            UserFooter,
            TaskList
        },
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
            },
            // 取消一个勾选
            checkTodo(id) {
                this.todos.forEach((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                })
            },
            deleteTodo(id) {
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            checkAllTodo(completed){
                this.todos.forEach((todo)=>{
                    todo.completed = completed
                })
            },
            clearAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.completed
                })
            }
        },
        watch: {
            todos:{
                deep: true,
                handler(value){
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        }
    }
</script>

<style>
    /* base */
    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }
    .btn:focus {
        outline:none;
    }
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>