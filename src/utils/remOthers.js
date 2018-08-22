/**
 * 监听window的resize事件，动态设置根元素(html)的字体大小
 * 
 */
(function (doc, win) {
  const html = doc.documentElement,
    setHTMLSize = function () {
      // 这里使用offsetWidth比较好，因为clientWidth在加入border的时候，并不会算入在内
      // width = 元素本身宽度 + border + padding
      // var clientWidth = html.clientWidth;
      var offsetWidth = html.offsetWidth;
      if (!offsetWidth) return;
      // 这里相当于offsetWidth / 10
      // 1rem = 屏幕宽度/10
      // html.style.fontSize = 32 * (offsetWidth / 320) + 'px';
      // 这种忽略了一个问题：chrome浏览器支持最小字体为12px;所以 1rem 永远等于12px，并不是 5px
      // html.style.fontSize = (offsetWidth / 75) + 'px';

      // 这样写 1rem = 50px;
      // 此时，设计图的大小/100 rem 即为我们应该写的元素大小
      html.style.fontSize = (offsetWidth / 7.5) + 'px';
    };
  let resizeEvent;
  resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
  if (!html.addEventListener) return;
  win.addEventListener(resizeEvent, setHTMLSize, false);
  doc.addEventListener('DOMContentLoaded', setHTMLSize, false);
})(document, window);

// DOMContentLoaded: 当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、子框架的完成加载。

// load: 仅用于一个完全加载的页面

// DOMContentLoaded事件要绑定到`document`对象上，而load事件要绑定到window上