<template>
    <div>
        <h2>Student Name: {{ studentName }}</h2>
        <h2>Student Age: {{ studentAge}}</h2>
    </div>
</template>

<script>
    export default {
        name: "StudentInfo",
        data() {
            return {
                studentName: "Nick",
                studentAge: 31
            }
        }
    }
</script>
