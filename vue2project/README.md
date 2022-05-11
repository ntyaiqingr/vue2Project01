## 配置项props
    功能： 让组件接受外部传过来的数据
    1）传递数据：
        <Demo age="XXX"/>
    2) 接收数据：
        1. 只接收
        props: ['age']
        2. 限制类型
        props: {age: Number}
        3. 限制类型 必要性 指定默认值
        props: {
            age: {
                type: Number, //类型
                required: true, //必要性
                default: 10 //默认值
            }
        }
    备注：
        props是只读的，Vue底层监测你对props的修改，如果进行修改，就会发出警告，若业务需求需要修改，可以复制props的内容到data中，然后修改data中的数据

## mixin（混入）
    功能：可以把数个组件公用的配置提取成一个混入对象
    使用方式：
        第一步： 定义混入
        export const a = {
            data(){...},
            methods(){...}
        }
        第二步：使用混入
        1）全局混入 Vue.mixin(XXX)
        2) 局部混入 mixins: ['XXX']

## 插件
    功能： 用于增强Vue
    本质: 包含install方法的一个对象 install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.intall = function(Vue, options) {
            //添加全局过滤器
            Vue.filter(...)
            //添加全局指令
            Vue.directive(...)
            //配置全局混入
            Vue.mixin(...)
            //添加实例方法
            Vue.prototype.$myMethod = function() {...}
            Vue.prototype.$myProperty = xxxx
        }

## scoped样式
    作用 让式样在局部中生效 防止冲突
    写法 <style scoped>

## TodoList 案例
    1.组件化编码流程
        1）拆分静态组件：组件要按照功能点拆分 命名不要和HTML元素冲突
        2）实现动态组件：考虑好数据的存放位置 数据是一个组件在用还是一些组件在用
            1）一个组件在用：存放在自身即可
            2）一些组件在用：放在他们共同的父组件上（状态提升）
        3）实现交互：从绑定事件开始
    2.props适用于：
        1）父组件 => 子组件 通信
        2）子组件 => 父组件 通信 要求父先给子一个函数
    3.使用v-model的时候要切记：v-model绑定的值不能是props传来的值 因为props是不可以修改的
    4.props传来的若是对象类型的值 修改对象中的属性时Vue并不会报错 但不推荐这么使用
    