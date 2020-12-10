<template>
  <div>
    <el-table :data='teacher' border>
      <el-table-column prop='name' label="姓名"></el-table-column>
      <el-table-column prop='username' label="学号"></el-table-column>
      <el-table-column prop='college' label="学院"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data(){
    return{
      teacher:'',
    }
  },
  methods:{
    getInfo(){
      $.ajax({
        url:'http://localhost:3000/teacher',
        method:'post',
        success:(data)=>{
          this.teacher = data
        }
      })
    },
  },
  created(){
    this.getInfo()
  }
}
</script>