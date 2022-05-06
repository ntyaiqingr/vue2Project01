/* 
  该文件是整个项目的入口
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件 他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
/* 
  关于不同版本的Vue
    1. vue.js与vue.runtime.XXX.js的区别
      1）vue.js是完整版的Vue 包括核心功能+模板解析器
      2）vue.runtime.XXX.js 是运行版本的Vue只包括核心功能 没有模板解析器

    2. 因为vue.runtime.XXX.js没有模板解析器 所以不能使用template配置项 需要使用
    render函数接收到createElement函数去指定具体内容
*/

// 创建Vue的实例对象 --- vm
new Vue({
  // 完成了这个功能： 将App组件放入了容器中
  // render(createElement){
  //   console.log("@", this);
  //   return createElement("h1", "Hello")
  // }
  render: h => h(App),
}).$mount('#app')

/* new Vue({
  el: "#App",
  render: h => h(App),
}) */
