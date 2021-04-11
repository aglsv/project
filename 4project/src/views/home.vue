<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :lg="12" :sm="24">
        <!-- 欢迎 -->
        <Welcome></Welcome>
      </el-col>
      <el-col :lg="12" :sm="24">
        <!-- 提示 -->
        <el-card>
          <p>记得阅读注意事项哦，选题的时候也请认真对待</p>
          <p>如有问题还请及时反馈</p>
        </el-card>
      </el-col>
    </el-row>
    <!-- 选题内容 -->
    <div v-if="!start && !find">
      <el-alert
        title="您还没有选题信息"
        type="warning"
        effect="dark"
        center
        show-icon
      ></el-alert>
      <el-popover placement="top" trigger="hover">
        <p>
          您是否了解您的指导老师和其发布的毕业设计选题？ <br />或许您可移步
          <i class="el-icon-s-custom"></i> 教师查询
        </p>
        <div id="popoverDiv">
          <router-link class="popoverButton" to="/teacher" tag="el-button"
            >移步</router-link
          >
        </div>
        <el-button class="start" @click="change" slot="reference">
          请开始您的毕业设计选题
        </el-button>
      </el-popover>
    </div>
    <div v-if="find && !start">
      <el-alert
        title="您已完成选题"
        type="success"
        effect="dark"
        center
        show-icon
      ></el-alert>
      <el-popover placement="top" trigger="hover">
        <p>
          真的要重新选题吗？ <br />或许您可以先了解了解您所选的题目和老师<i
            class="el-icon-s-custom"
          ></i>
          教师查询
        </p>
        <div id="popoverDiv">
          <router-link class="popoverButton" to="/teacher" tag="el-button"
            >移步</router-link
          >
        </div>
        <el-button class="start" @click="change" slot="reference">
          请开始您的毕业设计选题
        </el-button>
      </el-popover>
    </div>
    <Start v-if="start"></Start>
    <router-view></router-view>
  </div>
</template>
<script>
import Welcome from "../components/welcome";
import Start from "../components/start";
import $ from "jquery";
export default {
  data() {
    return {
      start: false,
      find: false,
      findsubject: "",
    };
  },
  components: {
    Start,
    Welcome,
  },
  methods: {
    findSub() {
      $.ajax({
        url: "http://localhost:3000/home",
        method: "post",
        data: { username: sessionStorage.getItem("username") },
        success: (data) => {
          this.find = true;
          this.findsubject = data;
        },
      });
      // axios.interceptors.request.use(
      //      config => {
      //          // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
      //          //config.data = JSON.stringify(config.data);
      //          let token = localStorage.token;
      //          //let token = 'xxx';
      //          let appid = 'xxx';
      //          let appID = decodeURIComponent(appid);
      //          config.headers.token = token;
      //          //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

      //          if (config.method == 'get') {
      //              config.params.app_id = appID
      //              config.params.token = token
      //          }
      //          if (config.method == 'post') {
      //              config.data.token = token
      //              config.data.app_id = appID
      //          }
      //          return config;
      //      },
      //      error => {
      //          return Promise.reject(err);
      //      });
    },
    change() {
      this.start = true;
    },
  },
  created() {
    this.findSub();
    console.log(this.$store.state.username);
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 20px;
}
.el-card {
  border-radius: 10px;
}
.el-row {
  padding-top: 40px;
  .el-card {
    margin-bottom: 20px;
  }
}
.el-alert {
  margin-top: 50px;
}
.start {
  position: relative;
  left: 40%;
}
.popoverButton:hover {
  background-color: #7e74f12f;
  border: #7f74f1 1px solid;
  color: #7f74f1;
}
#popoverDiv {
  margin-top: 5px;
  text-align: right;
}
.start {
  margin-top: 100px;
  padding: 0 20px;
  height: 60px;
  background: #7f74f1;
  border: 0;
  border-radius: 10px;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  div {
    height: 100%;
    width: 100%;
    line-height: 60px;
  }
}
.start:hover {
  background-color: #7e74f1c0;
}
</style>