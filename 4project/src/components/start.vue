<template>
<el-row>
  <el-col :span='10' :offset='4'>
    <el-cascader-panel v-model="sub" :options="subject" 
    :props="{value:'name',label:'name'}"
    ></el-cascader-panel>
  </el-col>
  <el-col :span='16' :offset="4">
    <el-button @click="choiceSub">确定</el-button>
  </el-col>
</el-row>
</template>
<script>
import $ from 'jquery'
export default {
  name:'start',
  data(){
    return{
    subject:[],
    sub:'',
    }
  },
  methods:{
    getSub(){
      $.ajax({
        url:'http://localhost:3000/home/sub',
        method:'post',
        data:'',
        success:(data)=>{
          this.subject = data
        }
      })
    },
    choiceSub(){
      console.log(this.sub);
      $.ajax({
        url:'http://localhost:3000/home/start',
        method:'post',
        data:{
          username:sessionStorage.getItem('username'),
          teacher:this.sub[0],
          sub:this.sub[1]
        },
        success:(data)=>{
          if(data.code==1){
            this.$message({message:data.msg+'，即将跳转到个人中心',type:'success'})
            setTimeout(() => {
              this.$router.push('/user')
            }, 3000);
          }
        }
      })
    }
  },
  created(){
      this.getSub()
  }
}
</script>

<style lang="less" scoped>
.el-cascader-panel{
  background: #fff;
}
</style>