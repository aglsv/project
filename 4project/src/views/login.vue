<template>
    <div class="login-container">
        <el-form :model="ruleForm"  ref="ruleForm" :rules="rules" status-icon class="login-page">
            <h3 class="title">登录</h3>
            <el-form-item prop="username">
              <el-input type="text" 
              v-model="ruleForm.username" 
              auto-complete="off" 
              placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" 
              auto-complete="off" placeholder="密码">
              </el-input>
            </el-form-item>
            <el-form-item prop='identity'>
              <el-radio-group v-model="ruleForm.identity">
                <el-radio label="student">学生</el-radio>
                <el-radio label="teacher">教师</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit(ruleForm)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import $ from 'jquery';
import store from '../store/index'
export default {
    data(){
        return {
          ruleForm:{
              username: '',
              password: '',
              identity: '',
          },
          rules:{
              username: [
                {required: true, message: '请输入学号或工号', trigger: 'blur'},
                {pattern:/^[0-9]{6}$/,message:'学号或工号长度为12位的数字',trigger:'blur'}
              ],
              password: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,message:'密码为8-16位，必须包含大小写英文和数字', trigger:'blur'}
              ] 
          },
          username:'',
      }
    },
    a:'',
    store:store,
    methods: {
        handleSubmit(ruleForm){
          this.$nextTick(()=>{
            this.$refs.ruleForm.validate((valid)=>{
              if(valid){
                $.ajax({
                  url:'http://localhost:3000/login',
                  method:'post',
                  data:this.ruleForm,
                  success:(data)=>{
                    if(data.code == 1){
                      this.$message({message:'登陆成功', type:'success'});
                      // 名字
                      this.$store.commit('name',data.name)
                      // 学号信息
                      this.$store.commit('username',data.username)
                      // 身份
                      this.$store.commit('identity',data.identity)
                      
                      setTimeout(() => {
                        this.$router.push({path: '/home'});                         
                      }, 1000);           
                    }else{
                      this.$message.error(data.msg)
                    }
                  }
                })
              }else{
                console.log('err');
                return false
              }
            })
            
          })
        },
    },
};
</script>

<style lang='less' scoped>
.login-page {
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
</style>