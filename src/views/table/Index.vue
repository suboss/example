<template>
   <div class="main-box">
      <div class="data-box">
        <div class="search-box box-radis">
          <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="formInline.username" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="地址">
          <el-input v-model="formInline.address" placeholder="地址"></el-input>
          </el-form-item>
             <el-form-item label="日期">
                <EDateRagePicker v-on:changed="handleDataChanged"></EDateRagePicker>
              </el-form-item>
          <el-form-item label="时间">
             <EDateTimeRagePicker ref="eDataTimeRanger"></EDateTimeRagePicker>
          </el-form-item>
              <el-form-item>
          <el-button type="primary" @click="handleSel">查询</el-button>
          <el-button @click="dialogFormVisible = true" type="primary"
            >新增</el-button
          >
          <el-button type="danger">删除</el-button>
        </el-form-item>
          </el-form>
          </div>
        </div>
        <div class="list-box box-radis">
           <el-table
        v-loading="loading"
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
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="date" label="时间" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
            >
              <el-button
                type="danger"
                label="删除"
                @click="handleDelData(scope.$index)"
                icon="el-icon-delete"
                circle
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="修改"
              placement="top"
            >
              <el-button
                type="primary"
                lable="修改"
                @click="handleUpData(scope.row)"
                icon="el-icon-edit"
                circle
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
        </div>
      </div>
      <div class="page-box box-radis">      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="15"
        :page-sizes="[15]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination></div>
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
   </div>
</template>

<script setup>
</script>

<style scoped>
 /* 已经在 index 样式表中增加了相应的样式*/
 .main-box{
   position: relative;
   width: inherit;
   height: inherit;
   background-color:#f2f3f7;
   overflow: hidden;
   padding: 0px;
   margin: 0px;
 }
 .data-box,.page-box{
   left: 15px;
   right: 15px;
   position: absolute;
 }
 .search-box{
   min-height: 60px;
 }
 .data-box{
   top: 10px;
   height: auto;
   bottom: 70px;
 }
  .page-box{
   height: 60px;
   bottom: 0px;
 }
 .search-box,.list-box{
    position: absolute;
    width: 100%;
 }
 .list-box{
   height: auto;
   top: 70px;
   bottom: 0px;
 }
 .box-radis{
   border-radius: 14px 14px 14px 14px;
   background-color: #fff;
   box-shadow: 0vw 4px 4px #eaeef6;
 }

 /*列表样式*/
 .el-table td,.el-table th{
   padding: 3px 0px 3px 0px !important;
   border: opx !important;
}
.el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed
{
     padding: 3px 0px 3px 0px !important;
  border: opx !important;
}
</style>
<script>
// 自定义组件，日期、时间范围组件
import EDateRagePicker from '@/components/EDateRagePicker'
import EDateTimeRagePicker from '@/components/EDateTimeRagePicker'

export default {
  data () {
    return {
      currentPage4: 1,
      dialogFormVisible: false,
      tableData: [],
      isAdd: true,
      upRow: [],
      form: {
        price: 234.22,
        name: '',
        address: '',
        date: ''
      },
      formLabelWidth: '120px',
      formInline: {
        username: '',
        address: ''
      },
      loading: true
    }
  },
  components: {
    EDateRagePicker,
    EDateTimeRagePicker
  },
  created: function () {
    // 初始加载数据
    this.initData()
  },
  mounted () {
    window.onresize = this.resize()
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
  destroyed () {
    window.onresize = null
  },
  methods: {
    //  显示每行行号
    rowClassName ({ row, rowIndex }) {
      // 把每一行的索引放进row.id
      row.id = rowIndex + 1
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 2 === 1) {
        return 'success-row'
      }
    },
    handleSizeChange (val) {
      console.log('每页 {' + val + '} 条')
    },
    handleCurrentChange (val) {
      console.log('当前页: {' + val + '}')
    },
    handleDelData (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除数据
        if (this.tableData && this.tableData.length > 0) {
          this.tableData.splice(index, 1)
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleUpData (row) {
      this.isAdd = false
      this.dialogFormVisible = true
      this.form.date = row.date
      this.form.name = row.name
      this.form.address = row.address
      this.form.price = row.price
      this.upRow = row
    },
    handleNewData () {
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
      var that = this
      this.$http.get('/api/Login/SaveUser', {
        params: {
          date: that.form.date,
          name: this.form.name,
          address: that.form.address,
          price: that.form.price
        }
      })
        .then(function (result) {
          // 此处不能使用this 关键字，因为this 关键字指向的函数本身，并非vue对象，所以在调用函数之前需要获得vue对象的一个指向，利用闭包原理：函数内部可以访问函数外部的对象
          that.tableData = result.data
          that.loading = false
        })
        .catch(function (error) {
          // 失败
          that.loading = false
          console.log(error)
        })
      this.dialogFormVisible = false
      this.$message('数据保存成功')
    },
    initData () {
      this.loading = true
      var that = this
      this.$http
        .get('/api/Login/GetList', {
          params: {
            uN: that.formInline.username,
            aD: that.formInline.address
          }
        })
        .then(function (result) {
          // 此处不能使用this 关键字，因为this 关键字指向的函数本身，并非vue对象，所以在调用函数之前需要获得vue对象的一个指向，利用闭包原理：函数内部可以访问函数外部的对象
          that.tableData = result.data
          that.loading = false
        })
        .catch(function (error) {
          // 失败
          that.loading = false
          console.log(error)
        })
    },
    resize () {
      // console.log(this.$refs.tableData)
      // let tb = this.$refs.tableData
      // var height = document.documentElement.clientHeight || document.body.clientHeight
      // var dheight = document.getElementById('divCondition')
      // console.log('height = ' + height)
      // tb.height = parseInt(height - dheight.clientHeight - 45 - 60 - 70)
    },
    handleSel () {
      console.log('Get Child Component DateTimeRanger ')
      let arValue = this.$refs.eDataTimeRanger.value2
      // 这是获取子组件的第二种方法，通过在子组件调用处设置ref属性
      if (arValue.length > 0) {
        console.log(arValue[0])
        console.log(arValue[1])
      }
      // 查询数据
      this.initData()
    },
    handleDataChanged (nvMin, nvMax) {
      console.log('nvMin = ' + nvMin)
      console.log('nvMax = ' + nvMax)
    }
  }
}
</script>
