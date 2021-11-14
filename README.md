#### MVP和MVVM区别
- 前者通过p层控制Model和View层
- 后者通过viewModel层（vue）控制Model和View层
- 前者p层大量的操作dom，后者的dom操作由vue内部控制，开发者无须过多关注dom


#### vue 生命周期
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestory
- destoryed


#### computed和watch区别
- 前者可以同时监听多个属性
- 后者需要一个个监听
- methods也能实现监听效果，但是当未监听的属性变化是，methods也会执行，因此不推荐methods用于监听。

#### vue中渲染的浅比较
- 数组通过下标修改或者对象添加key-val时，数据变化了，但视图没有更新
- 1、因此需要修改引用来强制刷新。
- 2、除了修改引用，还可以同vue的set方法来触发更新
- 3、数组可以通过调用变异方法，如pop，push

#### 监听原生事件
- @click.native

#### vue多个组件之间传递
- bus、发布订阅、观察者模式

#### 通过插槽向子组件传递dom

#### v-once 可以提高vue组件的渲染性能


#### font-size和rem

设计稿是按照两倍的像素，因此设计稿上的80px，实际是40px
通过结合font-size 设置为 50px， 1rem=html
因此 80px 在程序中写成 0.8rem，就可以实现40px的效果。