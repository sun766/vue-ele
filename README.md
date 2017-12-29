# 作为实战练手

该项目最初使用VUE 1.0版本开发，在学习过程中通过VUE 2.0进行转化。同时离不开度娘支持。

遇到问题1：
* github上传文件，提示： refuse to merge unrelated histories.
原因： 先前已经写好代码，1、 初始化本地代码仓库 2、github创建一个新的仓库并clone下来 3、push出现该问题。根本原因：此时clone下来同本地没有关系。
尝试很多办法无效，就使用最笨的方法：保留1,2；将原项目复制到本地代码仓库中 在执行 3。

* 移动端如何设置1px边框
>> @media 结合 缩放技术

* 模糊效果
filter: blur(10px)

* 文本内容过长省略...
white-space: nowrap
overflow: hidden
text-overflow: ellipse

* span（行内元素）标签之间空格问题
方案1： 两个span之间无空格
方案2： 父标签设置font-size:0

* 行内元素对齐
vertical-align: top

