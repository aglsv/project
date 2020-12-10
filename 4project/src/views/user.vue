<template>
<div class='container'>
  <h3>个人信息</h3>
  <el-table class="user" :data='userinfo' border>
    <el-table-column prop='name' label="姓名"></el-table-column>
    <el-table-column prop='username' label="学号"></el-table-column>
    <el-table-column prop='college' label="学院"></el-table-column>
    <el-table-column prop='speciality' label="专业"></el-table-column>
    <el-table-column prop='class' label="班级"></el-table-column>
  </el-table>
  <h3>毕设选题信息</h3>
  <el-table class="info" :data='subj' border>
    <el-table-column prop='teacher' label="指导老师" width='300px'></el-table-column>
    <el-table-column prop='sub' label="题目"></el-table-column>
  </el-table>
</div>
</template>
<script>
import $ from 'jquery';
export default {
  data(){
    return{
      userinfo:'',
      subj:[]
    }
  },
  
  methods:{    
    getInfo(){
      $.ajax({
        url:'http://localhost:3000/user',
        method:'post',
        data:{username:sessionStorage.getItem('username')},
        success:(data)=>{
          this.userinfo = data 
        }
      })
    },
    findSub(){
      $.ajax({
        url:'http://localhost:3000/home',
        method:'post',
        data:{username:sessionStorage.getItem('username')},
        success:data=>{
          this.find = true
          this.subj = data
          console.log(this.subj);
        }
      })
    },

  },
  created(){
    this.getInfo()
    this.findSub()
  }
}
</script>
<style lang="less" scoped>
.container{
  margin: 0 20px;
  .el-table{
    margin-bottom: 60px;
  }
}
</style>