<template>
  <div class="container">
    <center>
      <el-card>
        <h3>选题要求</h3>
        <p>一人一题，不得重复。请根据实训方向和自身情况选题</p>
      </el-card>
    </center>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/10/12" placement="top">
          <el-card>
            <img
              src="../../../server/public/image/太原科技大学华科学院毕业设计（论文）指导流程.png"
            />
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  margin: 0 20px;
}
.el-card {
  margin: 20px 0;
}
img {
  width: 100%;
}
</style>