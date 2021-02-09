<template>
  <div>
    <el-form ref="form" :model="form" label-width="220px">
      <el-form-item label="显示多选框">
        <el-switch
          v-model="form.showckc"
          active-text="显示"
          inactive-text="不显示"
          @change="handleSwcithChange"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="允许拖拽">
        <el-switch
          v-model="form.showgra"
          active-text="允许"
          inactive-text="不允许"
          @change="handleSwcithDrag"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="手风琴模式（初始加载）">
        <el-switch
          v-model="form.showsfqms"
          active-text="是"
          inactive-text="否"
          @change="handleSfqmo"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="展开全部（初始加载）">
        <el-switch
          v-model="form.showsAll"
          active-text="是"
          inactive-text="否"
          @change="handleShowAll"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="过滤关键字">
        <el-input
          placeholder="输入关键字进行过滤"
          type="text"
          v-model="form.txtKey"
          @input="filterText"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="getSelNode">获取选中的值</el-button>
      </el-form-item>
    </el-form>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :show-checkbox="showCheckbox"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      :draggable="dragAbled"
      :accordion="sfqms"
      :filter-node-method="filterNode"
      :default-expand-all="showAllNode"
      ref="tree"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: [],
        showckc: false,
        showgra: false,
        showsfqms: false,
        showsAll: true,
        txtKey: ''
      },
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      showCheckbox: false,
      dragAbled: false,
      sfqms: false,
      showAllNode: true
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleSwcithChange (nv) {
      // 是否允许多选
      this.showCheckbox = nv
      console.log('nv = ' + nv)
    },
    handleSwcithDrag (nv) {
      // 是否允许拖拽
      this.dragAbled = nv
    },
    handleSfqmo (nv) {
      // 是否手风琴模式
      this.sfqms = nv
      console.log('手风琴模式：' + nv)
      console.log('这个属性不是太管用')
    },
    handleShowAll (nv) {
      this.showAllNode = nv
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleDragStart (node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    filterText (val) {
      this.$refs.tree.filter(val)
    },
    getSelNode () {
      if (this.showCheckbox) {
        // (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false
        let allNode = this.$refs.tree.getCheckedNodes()
        if (allNode.length === 0) {
          this.$message('未选择节点，请先选择')
          return
        }
        console.log(allNode)
        let allKeys = this.$refs.tree.getCheckedKeys()
        console.log(allKeys)
      } else {
        this.$message('请先选择显示多选框，并选择节点')
      }
    }
  }
}
</script>
