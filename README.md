# my-element

> Vue 仿饿了么项目

## rem理解
> rem:假如`<html>`标签上设置了样式`font-size: 16px`，那么`1rem=16px`

代码演示  
```js
(function (doc, win) {
  const html = document.documentElement
  const setRem = () => {
    clearTimeout(timerId)
    const timerId = setTimeout(() => {
      const {width} = html.getBoundingClientRect()
      if (!width) { return }
      html.style.fontSize = width / 7.5 + 'px'
    }, 100)
  }
  win.addEventListener('resize', setRem)
  doc.addEventListener('DOMContentLoaded', setRem)
}(document, window))
```
思路：  
在DOM加载完毕或者屏幕大小发生变化的时候动态设置`html`根元素的字体大小

代码实现：
* 监听`DOMContentLoaded`事件，在初始的`HTML`文档被完全加载和解析完成后（无需等待
样式表、图像和子框架的完成加载），设置`html`的`font-size`
* 监听`resize`事件，在文档视图调整大小（页面大小发生变化时），设置`html`的`font-size`
* 页面中计算`rem`的公式: (设计图元素宽度/10)rem

注意点：
1. 获取宽度要使用`offsetWidth`或者`getBoundingClientRect.width`,
因为`padding+border`会计算到宽度之内的。否则的话获取到的宽度会少`border`值
2. `DOMContentLoaded`事件要绑定到`document`上，而`load`事件要绑定到`window`上
3. `load`:用于一个完全加载的页面，要比`DOMContentLoaded`慢，这里使用后者就可以
4. `html.style.fontSize = width / 75 + px`:这样写之后，设计图宽度/100就可以计算出rem，
但是此时当`chrome`调整到`iphone6/7/8`的时候，`html`的`font-size`是`5px`，即`1rem = 5px`,
可以实际确是:`1rem = 12px`。因为`chrome`浏览器最小字体只支持`12px`,所以将75改为7.5,设计图/10计算
出对应的`rem`。
5. 设置完`rem`之后，还要在`body`中初始化页面的字体大小，否则页面中的字体都会是50px即1rem的大小  
   具体做法：在`reset.less`中，设置：`body{ font-size: 14px; }`

加注释的代码：
```js
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
```
## 移动端`1px`实现
