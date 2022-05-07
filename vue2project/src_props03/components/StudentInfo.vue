<template>
    <div class="school">
        <h2>{{ msg }}</h2>
        <h2>{{ target }}</h2>
        <h2>She is {{ herAge+1 }}</h2>
        <h2>Student Name: {{ name }}</h2>
        <h2>Student Age: {{ age }}</h2>
        <h2>Student gender {{ gender }}</h2>
        <button @click="changeTargetAge">add 10 to age</button>
    </div>
</template>

<script>
export default {
    name: 'StudentInfo',
    data() {
        console.log(this);
        return {
            name: 'Nick',
            age: 31,
            gender: 'M',
            herAge: this.targetAge 
        }
    },
    // 简单接受
    // props: ['msg', 'target', 'targetAge']

    // 接受的同时对数据进行类型设置
/*     props: {
        msg: String,
        target: String,
        targetAge: Number
    } */

    // 接受的同时对数据 进行类型的限制+默认值的制定+必要性的限制
    props: {
        msg: {
            type: String, // msg的类型是字符串
            required: true // msg是必要的
        },
        target: {
            type: String,
            required: true
        },
        targetAge: {
            type: Number,
            default: 18 // 默认值
        }
    },
    methods: {
        changeTargetAge(){
            this.herAge += 10
        }
    },
}
</script>
