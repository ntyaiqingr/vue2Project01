<template>
    <div>
        <h2 @click="showName">School Name: {{ name }}</h2>
        <h2>School Address: {{ address }}</h2>
    </div>
</template>

<script>
import { mixin1 } from "../mixin";
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: 'YiGao',
            address: 'luoyang'
        }
    },
    mixins: [mixin1]
}
</script>
