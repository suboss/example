<template>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-card :body-style="{ padding: '5px' }">
        <img
          src="@/assets/hambuger.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '5px' }">
        <img
          src="@/assets/hambuger.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-card :body-style="{ padding: '5px' }">
        <img
          src="@/assets/hambuger.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-card :body-style="{ padding: '5px' }">
        <img
          src="@/assets/hambuger.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div></el-col>
</el-row>
</template>

<style>

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 270px;
  display: block;
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

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>
