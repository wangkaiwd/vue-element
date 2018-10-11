const getScrollTop = () => {
  return document.body.scrollTop || document.documentElement.scrollTop
}

// 点击打开时候传入true禁止滚动穿透，关闭时候传入false恢复
export const toggleForbidScrollThrough = (function toggleForbidScrollThrough () {
  let scrollTop
  return function toggleForbidScrollThroughInner (isForbide) {
    if (isForbide) {
      scrollTop = getScrollTop()
      // position fixed会使滚动位置丢失，所以利用top定位
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollTop}px`
    } else {
      // 恢复时，需要还原之前的滚动位置
      document.body.style.position = 'static'
      document.body.style.top = '0px'
      window.scrollTo(0, scrollTop)
    }
  }
}())

