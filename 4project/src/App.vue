<template>
<div id="app">
  <el-container>
    <el-aside v-if="$route.path !== '/login' && $route.path !== '/' ">
      <NavAside></NavAside>
    </el-aside>
    <el-main>
      <Mainheader v-if="$route.path !== '/login' && $route.path !== '/' "></Mainheader>
      <router-view/>  
    </el-main>
  </el-container>

</div>
</template>

<script>
import NavAside from './components/aside';
import Mainheader from './components/header';
export default {
  components:{
    NavAside,
    Mainheader
  },
  // beforeCreate(){
  //   this.$router.push({path:'/login'})
  // }

}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
}
a{
  text-decoration: none;
}
.el-container{
  height: 100vh;
}
.el-main{
  background-color:#F8F8F8;
}
.el-aside{
  z-index: 1;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>