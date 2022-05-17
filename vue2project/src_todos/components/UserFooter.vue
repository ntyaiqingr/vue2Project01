<template>
    <div class="todo-footer" v-show="total">
        <label>
        <input type="checkbox" :checked="isAll" @click="checkAll"/>
        </label>
        <span>Completed task: {{ doneTotal }}</span> / All task: {{ total }}
        <button class="btn btn-danger" @click="clearAll">Delete all tasks</button>
    </div>
</template>

<script>
    export default {
        name: "UserFooter",
        props: ['todos', 'checkAllTodo', 'clearAllTodo'],
        computed: {
            total(){
                return this.todos.length
            },
            doneTotal(){
                // const x = this.todos.reduce((pre, todo)=>{
                //     console.log("@@", pre)
                //     return pre + (todo.completed ? 1 : 0)
                // }, 0)
                // return x
                return this.todos.reduce((pre, todo)=> pre + (todo.completed ? 1 : 0), 0)
            },
            isAll(){
                return this.doneTotal === this.total && this.total > 0
            }
        },
        methods: {
            checkAll(e){
                this.checkAllTodo(e.target.checked)
            },
            clearAll(){
                this.clearAllTodo()
            }
        }
    };
</script>

<style scoped>
    /* footer */
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>