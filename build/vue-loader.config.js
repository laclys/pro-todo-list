module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 处理空白区域
    extractCSS: !isDev, // 将vue文件中的css样式拿出来
    cssModules: {}
  }
}