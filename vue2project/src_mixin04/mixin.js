export const mixin1 = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log("Hello");
    }
}

export const minin2 = {
    data() {
        return {
            x: 1,
            y: 2
        }
    },
}