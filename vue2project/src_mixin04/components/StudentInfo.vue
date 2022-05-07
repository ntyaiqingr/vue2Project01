<template>
    <div>
        <h2 @click="showName">Student Name: {{ name }}</h2>
        <h2>Student Age: {{ age }}</h2>
        <h2>{{ x }}</h2>
    </div>
</template>

<script>
// 引入一个混合
import {mixin1, minin2} from '../mixin'
export default {
    name: 'StudentInfo',
    data() {
        return {
            name: 'Nick',
            age: 31,
            x: 999
        }
    },
    mounted() {
        console.log("Hello, ye");
    },
    mixins: [mixin1, minin2]
}
</script>
