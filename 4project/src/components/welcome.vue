<template>
  <el-card class="welcome">
    <img class="decorate-left" src="../assets/彩带-左边.png">
    <img class="decorate-right" src="../assets/decore-right.png" alt="">
    <img src="../assets/彩带.png" alt="">
    <div class="wel-content">
      <h3>你好，{{name}}</h3>
      <h4>欢迎使用毕业设计选题系统</h4>
    </div>
  </el-card>
</template>
<script>
export default {
  name:'welcome',
  data(){
    return{
      name:''
    }
  },
  created(){
    this.name = sessionStorage.getItem('name')
  } 
}
</script>
<style lang="less" scoped>
  .welcome{
    position: relative;
    height: 200px;
    text-align: center;
    color: #ffffff;
    background-color: #7F74F1;
    .decorate-left{
      position: absolute;
      top: 10px;
      left: -10px;
    }
    .decorate-right{
      position: absolute;
      top: 10px;
      right: 0px;
    }
    .wel-content{
      line-height: 50px;
    }
  }

</style>