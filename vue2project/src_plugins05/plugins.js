export default {
    install(Vue){
        // 全局过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })

        Vue.directive("fbind", {
            // 指令与元素成功绑定时
            bind(element,binding){
                        console.log("bind", this)
                        console.log("element", element)
                        console.log("binding", binding)
                        console.log("bind")
                        element.value = binding.value
                    },
                    // 指令所在元素被插入页面时
                    inserted(element,binding){
                        console.log("inserted", this)
                        console.log("inserted")
                        element.focus()
                    },
                    // 指令所在的模板被重新解析时
                    update(element,binding){
                        console.log("update", this)
                        console.log("updated")
                        element.value = binding.value
                    }
        })
        
        Vue.mixin({data() {
            return {
                x: 1,
                y: 2
            }
        }
        })
        Vue.prototype.hello = () => {
            alert('Hello')
        }
    }
}
