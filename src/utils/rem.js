/**
 * 监听window的resize事件，动态设置根元素(html)的字体大小
 * 
 */
(function (doc, win) {
  const html = doc.documentElement,
    setHTMLSize = function () {
      var clientWidth = html.clientWidth;
      if (!clientWidth) return;
      html.style.fontSize = 32 * (clientWidth / 320) + 'px';
    };
  let resizeEvent;
  resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
  if (!html.addEventListener) return;
  win.addEventListener(resizeEvent, setHTMLSize, false);
  html.addEventListener('DOMContentLoaded', setHTMLSize, false);
})(document, window);