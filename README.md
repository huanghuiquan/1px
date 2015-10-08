# 1px

> 1px 的[Stylus](https://github.com/stylus/stylus)实现

* [效果预览](https://github.com/huanghuiquan/1px)，欢迎拍砖

## 实现原理

- 通过检测 `@media` 属性检测device-pixel-ratio 获得缩放倍数x
- 设置元素的 `::after` 伪元素为父元素的x倍， 并设置边框，然后对`::after`做缩放scale(1/x)

## 特点

### 优点

- 无兼容性问题，支持所有设备
- 支持设置颜色
- 支持设置圆角
- 不存在无法点击的问题
- 使用方便

### 缺点

-  `::after` 伪元素被强行占用，可能与clearfix冲突，小心处理可以避免
- 元素的 `position` 属性被设置为relative， 可能影响子元素的定位，要小心

## 使用

### HTML
```html
<div class="box border border-top"></div>
<div class="box border border-right"></div>
<div class="box border border-bottom"></div>
<div class="box border border-left"></div>
<div class="box box-1 border border-all"></div>
<div class="box box-2 border border-all"></div>

```

### CSS(Style)

```css
size(w, h)
    width: w
    height: h

h1,
h2,
h3
    margin-left: 10px

h3
    margin-left: 20px

pre
    margin-left: 40px

.box
    size: 80px 40px
    margin: 0 auto
    margin-top 10px

.box-1
    set-border-radius(80px)

.box-2
    set-border-radius(0)

// set default color
.border
    set-border-color(#55555d)

.border-left
    set-border-color(red)

```
