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