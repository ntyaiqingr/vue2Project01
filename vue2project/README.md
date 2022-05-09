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