<template>
  <!-- 过滤器也可以串联，而且可以接受参数 -->
  <div>
    {{ date | formatDate | formatDateB }} <br />
    {{ date | formatDate | formatDateC(' hello ', 'world') }} <br />
    {{ FullName }}
  </div>
  <!-- 过滤器可以传递参数 例如 {{ date | formatDateC('arg1','arg2') }}-->

  <!-- 1、Vue 的声明周期
         created 实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el还不可用。需要初始化处理一些数据时会比较有用
         mounted el挂载到实例上后调用，一般我们的第一个业务逻辑会在此开始
         beforeDestory 实例销毁之前调用。主要解绑一些使用 addEventListener 监听的事件等
  -->
</template>

<script>
var padDate = function (value) {
  return value < 10 ? '0' + value : value
}

export default {
  name: 'TimeShow',
  data() {
    return {
      date: new Date(),
      firstName: 'Jack',
      lastName: 'Green'
    }
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value)
      var year = date.getFullYear()
      var month = padDate(date.getMonth() + 1)
      var day = padDate(date.getDay())
      var hour = padDate(date.getHours())
      var minutes = padDate(date.getMinutes())
      var seconds = padDate(date.getSeconds())
      return (
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minutes +
        ':' +
        seconds
      )
    },
    formatDateB: function (value) {
      return 'Now DateTime Is ' + value
    },
    formatDateC: function (value, var1, var2) {
      return value + ' ' + var1 + var2
    }
  },
  computed: {
    // 计算属性
    FullName: {
      // getter 用于读取 , 除了 getter和setter属性之外，同时可以使用函数，和FullName并排
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        // setter 用户赋值
        var name = newValue.split(' ')
        this.firstName = name[0]
        this.lastName = name[name.lastName - 1]
      }
    }
  },
  mounted: function () {
    // mounted 计算属性会缓存的
    var _this = this // 声明一个变量，指向Vue实例this ,保证作用域一致
    console.log('the first is calling ')
    this.timer = setInterval(() => {
      _this.date = new Date()
    }, 1000)
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer) // 实例销毁前，清除定时器
    }
  }
}
</script>
