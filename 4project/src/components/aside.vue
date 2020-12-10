<template>
  <div class="navAside">
    <p>毕设选课系统</p>
    <div id="menu">
      <router-link to="/home" tag="li"><i class="el-icon-s-home" exact></i> 首页</router-link>
      <router-link to="/user" tag="li"><i class="el-icon-setting"></i> 个人中心</router-link>
      <router-link to="/teacher" tag="li"><i class="el-icon-s-custom"></i> 教师查询</router-link>
      <router-link to="/attentions" tag="li"><i class="el-icon-warning"></i> 注意事项</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'navAside'
}
</script>

<style lang="less" scoped>
.navAside{
  height: 100vh;
  width: 300px;
  text-align: center;
  p{
    padding: 10vh 0;
    font-size: 30px;
    font-weight: 900;
    color:#7F74F1;
  }
  #menu{
    padding: 0 20px;
    li{
      padding: 0 20px;
      height: 50px;
      border-radius: 4px;
      font-size: 18px;
      color:#606266;
      line-height: 50px;
      text-align: left;
      transition: padding-left 500ms;
    }
    li:hover{
      padding-left: 30px;
    }
    .router-link-active{
      color: #fff;
      background:#7F74F1;
      box-shadow: 0 2px 12px 0 #7F74F1;
    }
    // li:hover{
      // color: #fff;
      // background:#7F74F1;
      // box-shadow: 0 2px 12px 0 #7F74F1;
    // }
  }
}
</style>