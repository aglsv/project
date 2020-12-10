// 实现rem适配
// 适配的是屏幕，范围 1024 ~ 1920

var setFont = function () {
  // 获取设备屏幕的宽度
  var html = document.querySelector('html');
  var width = html.clientWidth; // 获取html的宽度   
  // 判断一下，width值是否小于1024；是否大于1920
  if (width < 1024) {
      width = 1024;
  }
  if (width > 1920) {
      width = 1920;
  }
  // 计算html的fontSize值
  var fontSize = width / 24 + 'px';
  // 设置html元素的font-size
  html.style.fontSize = fontSize;
}
setFont();   //自调用先生效

// 浏览器窗口大小改变的时候，重新设置html的fontSize
window.onresize = function () {   
  setFont();
}
