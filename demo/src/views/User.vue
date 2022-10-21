<template>
  <div id="User">
    <!-- Form -->
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">
        + 新增
      </el-button>
    </div>

    <el-dialog :title="modelType === 0 ? '新增用户' : '编辑用户'" :before-close="handleClose" :visible.sync="dialogFormVisible"
      width="50%">
      <!-- 用户的表单信息 -->
      <el-form ref="form" :model="form" :inline="true" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex">
            <el-option label="男" :value="0"></el-option>
            <el-option label="女" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" value-format="yyyy-MM-DD"
            style="width: 100%"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex === 0 ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="birth" label="出生日期">
      </el-table-column>
      <el-table-column prop="addr" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-popconfirm title="这是一段内容确定删除吗？">
        <el-button slot="reference">删除</el-button>
      </el-popconfirm>

    </el-table>
  </div>
</template>

<script>
import { getUser, editUser, addUser, deleteUser } from '../api'

export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "100px",
      // 0表示新增弹窗，1表示编辑弹窗
      modelType: 0,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        birth: [
          { required: true, message: '请选择出生日期', trigger: 'blur' }
        ],
        addr: [
          { required: true, message: '请填写地址', trigger: 'blur' }
        ]
      },
      tableData: []
    };
  },
  mounted() {
    // 获取列表数据
    this.getList();
  },

  methods: {
    // 清空表单
    handleClose() {
      this.$refs.form.resetFields();
    },

    // 提交用户表单
    submit() {
      // 判断是否通过校验
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 校验通过时
          // 如果要新增用户
          if (this.modelType === 0) {
            addUser(this.form).then(() => {
              // 刷新当前列表
              this.getList();
            })
          } else {
            // 如果要编辑用户
            editUser(this.form).then(() => {
              // 刷新当前列表
              this.getList();
            })
          }
          // 清空数据
          this.handleClose();
          // 关闭弹窗
          this.dialogFormVisible = false;
        } else {

        }
      })
    },



    cancel() {
      // 清空表单
      this.handleClose();

      // 关闭对话框
      this.dialogFormVisible = false;
    },

    handleEdit(row) {
      this.modelType = 1;
      this.dialogFormVisible = true;
      this.form = JSON.parse(JSON.stringify(row));
    },

    handleDelete() {


    },

    handleAdd() {
      this.modelType = 0;
      this.dialogFormVisible = true;
    },

    getList() {
      // 获取列表数据
      getUser().then(({ data }) => {
        this.tableData = data.list;
      })
    }
  }
};
</script>

<style>

</style>


