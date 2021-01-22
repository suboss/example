<template>
  <el-container>
    <div class="divCondition" id="divCondition">
      <el-button type="primary" @click="handleAddData()"
        >新增一行数据</el-button
      >
      <el-button @click="dialogFormVisible = true" type="primary"
        >新增</el-button
      >
    </div>
    <el-main>
      <el-table
        :data="tableData"
        ref="tableData"
        border
        style="width: 100%; height: 100%"
        :row-class-name="rowClassName"
        id="tablelist"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="id"
          label="序号"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column prop="date" label="时间" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              type="primary"
              label="删除"
              @click="handleDelData(scope.$index)"
              >删除</el-button
            ><el-button
              type="primary"
              lable="修改"
              @click="handleUpData(scope.row)"
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="15"
        :page-sizes="[15]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
      <div style="display: none">总价：{{ totalPrice }}</div>
    </el-footer>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleNewData">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 4,
      dialogFormVisible: false,
      tableData: [],
      isAdd: true,
      upRow: [],
      form: {
        price: 234.22,
        name: '张飞',
        address: '北京市',
        date: '2021-01-10'
      },
      formLabelWidth: '120px'
    }
  },
  created: function () {
    this.initData()
  },
  mounted() {
    window.onresize = this.resize()
    // this.resize()
  },
  computed: {
    totalPrice: function () {
      var total = 0
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i]
        total += parseFloat(item.price)
      }
      return total
    },
    getList: function () {
      return this.tableData
    }
  },
  destroyed() {
    window.onresize = null
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      // 把每一行的索引放进row.id
      row.id = rowIndex + 1
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 2 === 1) {
        return 'success-row'
      }
    },
    handleSizeChange(val) {
      console.log('每页 {' + val + '} 条')
    },
    handleCurrentChange(val) {
      console.log('当前页: {' + val + '}')
    },
    handleAddData() {
      this.isAdd = true
      // 新增数据
      this.tableData.push({
        date: '2021-01-21',
        name: '新增',
        address: '北京市海淀区',
        price: 29213.2
      })
    },
    handleDelData(index) {
      // 删除数据
      if (this.tableData && this.tableData.length > 0) {
        this.tableData.splice(index, 1)
      }
    },
    handleUpData(row) {
      this.isAdd = false
      this.dialogFormVisible = true
      this.form.date = row.date
      this.form.name = row.name
      this.form.address = row.address
      this.form.price = row.price
      this.upRow = row
    },
    handleNewData() {
      if (this.isAdd) {
        this.tableData.push({
          date: this.form.date,
          name: this.form.name,
          address: this.form.address,
          price: this.form.price
        })
      } else {
        this.upRow.date = this.form.date
        this.upRow.name = this.form.name
        this.upRow.address = this.form.address
        this.upRow.price = this.form.price
      }
      this.dialogFormVisible = false
    },
    initData() {
      var that = this
      this.$http
        .get('/api/Login/GetList')
        .then(function (result) {
          // 此处不能使用this 关键字，因为this 关键字指向的函数本身，并非vue对象，所以在调用函数之前需要获得vue对象的一个指向，利用闭包原理：函数内部可以访问函数外部的对象
          that.tableData = result.data
        })
        .catch(function (error) {
          // 失败
          console.log(error)
        })
    },
    resize() {
      console.log(this.$refs.tableData)
      let tb = this.$refs.tableData
      var height = document.documentElement.clientHeight || document.body.clientHeight
      var dheight = document.getElementById('divCondition')
      console.log('height = ' + height)
      tb.height = parseInt(height - dheight.clientHeight - 45 - 60 - 70)
    }
  }
}
</script>

<style>
.el-table .warning-row {
  background: white;
}

.el-table .success-row {
  background: #f2f7ef;
}
</style>
