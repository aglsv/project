<template>
  <div id="header">
  <i class="el-icon-more" v-if=""></i>
  <el-dropdown trigger='click'>
  <span class="el-dropdown-link">
      <i class="el-icon-bell"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item >暂无消息</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  <div >
    <p>{{name}}</p>
    <p>{{username}}</p>
  </div>
  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>      
</div>
</template>
<script>
export default {
  name:'mainheader',
  data(){
    return{
      name:'',
      username:'',
    }
  },
  methods:{
    gotouser(){
      this.$emit('name',this.name)
    }
  },
  created(){
    this.username = sessionStorage.getItem('username')
    this.name = sessionStorage.getItem('name')
  }
}
</script>

<style lang="less" scoped>
#header{
  display: flex;
  align-items: center;
  padding: 8px 20px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  i{
    color: #606266;
  }
  .el-icon-more{
    flex: 1;
    font-size: 20px;
  }
  .el-icon-bell{
    font-size: 22px;
    margin:10px;
  }
  div{
    margin:0 10px;
    text-align: right;
    color:#909399;
    font-size: 14px;
  }
  .el-avatar{
    box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.274);
  }
}
</style>