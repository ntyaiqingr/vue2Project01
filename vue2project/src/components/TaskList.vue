<template>
<div> 
    <ul class="todo-main">  
        <TaskItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"/>
    </ul>   
</div>    
</template>

<script>
    import TaskItem from "./TaskItem.vue";
    export default {
        name: "TaskList",
        components: {
        TaskItem
    },
    props: ['todos', 'checkTodo', 'deleteTodo']
};
</script>

<style scoped>
    /* main */
    .todo-main{
        margin-left: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>