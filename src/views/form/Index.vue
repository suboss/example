<template>
  <el-form ref="form" :model="form">
    <el-input-number
      v-model="form.num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>

    <el-input v-model="form.name" @input="handleInput"></el-input>
    <p>{{ message }}</p>
    <el-radio-group v-model="form.radio">
      <el-radio label="html">Html</el-radio>
      <el-radio label="js">JS</el-radio>
      <el-radio label="vue">Vue</el-radio>
    </el-radio-group>
    <p>{{ form.radio }}</p>
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
    <p>{{ form.type }}</p>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      pickl: 'js',
      form: {
        num: 1,
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        radio: 'js'
      }
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleInput: function (e) {
      console.log(e)
      this.message = e
    },
    onSubmit: function () {
      this.$http
        .post('/api/Login/LoginSystem', {
          username: this.form.name,
          password: this.form.num
        })
        .then(function (result) {
          // 成功
          console.log(result)
        })
        .catch(function (error) {
          // 失败
          console.log(error)
        })
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
