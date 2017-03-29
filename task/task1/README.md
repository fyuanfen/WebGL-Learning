# three.js 基础学习笔记
threeJs 是用来方便快捷创建 3D 视图的库，内部对 WebGL 的接口进行了封装。使得编写代码的过程更加贴近常规思维。

# 基础篇
## 1、创建画布
如果要画一幅画，首先需要的是一块画布：

```javascript
var renderer = new THREE.WebGLRenderer({
    // 
    canvas: document.getElementById('main')
})
// 设置画布的颜色
renderer.setClearColor('0x000000')
```
这样就有了一块画布，可以用来承载我们的画。

## 2、创建场景
场景的概念和画布很类似，场景内放物体，场景放到画布上。

```javascript
var scene = new THREE.Scene()
```
之后创建的所有东西，都是放到场景内。

## 3、创建照相机
场景是一个“黑盒子”，从外部看不到任何东西，所以需要使用“照相机”来观察内部的物体。

```javascript
var camera = new THREE.PerspectiveCamera(45, 4/3, 1, 1000)
```
创建好了一个照相机，回忆起之前学过的物理，照相机都是由一个“点”开始以椎体的视线向外延伸。

![](http://images.zyy1217.com/1490769640.png)


照相机在创建好之后，就可以把照相机放到我们想要的地方：

```javascript
camera.position.set(0, 0, 5)
```
![](http://images.zyy1217.com/3531509-a36f2aad9a6080d6.png)

## 4、创建物体

```javascript
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), 
     new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    }) 
)
```
创建了一个长宽高均为 1 的正方体，并且颜色为0xf0000并且是三维线框(wireframe: true)。

然后只要将这个正方体放到场景中，再把场景和照相机放到画布上就可以了。

## 5、显示

```javascript
scene.add(cube)
// 重点在这一句，显示场景与相机
renderer.render(scene, camera)
```
### 控制照相机
虽然照相机显示出了我们的正方体，但是由于是面对面，所以无法看出正方体的立体感，需要调整下照相机的位置，让照相机俯视或者仰视。

#### 改变照相机位置
所以肯定要改变照相机的位置：

```javascript
// 在 x 轴与 y 轴方向上都 + 1
camera.position.set(1, 1, 5)
```
![](http://images.zyy1217.com/3531509-816d72bfef3684e8.png)


从图片上可以比较直观看出移动的方向，仅仅是改变了在 x 和 y 轴上的距离，没有改变 z 轴距离，所以和改变距离前还是在同一个平面上。

联系日常生活的经验，照相机到了这个位置，物体相对的就是等于往反方向移动。所以原来在正中央的正方体”移动“到了左下角。

#### 改变照相机角度


```javascript
camera.lookAt(new THREE.Vector3(0, 0, 0))

```
就可以将照相机的角度朝向原点。

![](http://images.zyy1217.com/3531509-4d797b92f0b8b77f.png)


### 控制物体
#### 改变物体位置
初始化的物体都是在原点的，所以需要将其重新设置位置，每个物体都有position属性，通过改变该属性的x、y、z值就可以改变位置了，也可以调用position.set()传入x, y, z进行改变。

可能要注意的就是轴的方向。
#### 物体材质
材质就是说这个物体是什么做的，金属和布就有很大区别。

如果不通过触摸，就需要借助”光“来将材质进行区分，金属有高光而布没有。

# 综合篇

Three.js创建的3D场景中常用到的插件包括dat.gui.js和stats.js。

  [dat.gui.js](http://workshop.chromeexperiments.com/examples/gui/)用于创建菜单栏，可以用来控制场景中的各个参数来调试场景。
  stats.js用于对JavaScript进行性能检测。
 
# dat.gui.js
## 1.定义要控制的参数，以相机的位置为例


```javascript
var controls = new function() {  
this.cx = 0;  
this.cy = 0;  
this.cz = 0;  
this.redraw = function() {  
    camera.position.set(controls.cx, controls.cy, controls.cz);  
}  
```

cx、cy、cz为相机的x、y、z轴坐标。初始值为前面场景初始化定义相机的位置。
`redraw`是当参数变化时的重绘函数。
## 2.创建面板


```javascript
var gui = new dat.GUI();  
gui.add(controls, 'cx', -100, 100).onChange(controls.redraw);  
gui.add(controls, 'cy', -100, 100).onChange(controls.redraw);  
gui.add(controls, 'cz', -100, 100).onChange(controls.redraw)  

```
 往菜单中添加cx、cy、cz三个参数。
定义参数变化范围是 -100 ~100 。
定义参数变化时调用redraw()函数。

# stats.js
## 1.实例化一个stats对象 
  
  
```javascript
  var stats = new Stats();  
  stats.setMode(0);   
  stats.domElement.style.position = 'absolute';  
  stats.domElement.style.left = '0px';  
  stats.domElement.style.top = '0px';  
  document.body.appendChild(stats.domElement); 
         
```
setMode()函数 0：fps,1：ms
## 2.更新

```javascript
 function render() {  
 	 stats.begin();
    requestAnimationFrame(render);  
    renderer.render(scene, camera);  
    stats.update();  
} 
```


调用update()函数实时更新。
##  函数绑定问题

在调用 `requestAnimationFrame`时，由于当前作用域是windows，因此没有render函数，也就无法实现动画特效。这时，就需要重新对`requestAnimationFrame`绑定该实例.

众所周知，我们可以使用 Function 对象的原型方法call,apply, bind 来解决函数作用域的问题，call(this [, arg1, arg2 ...]) 和 apply(this [argArr]) 是一样的，都是立即在指定的 this 环境下执行函数，只是参数指定的方式不一样。而 bind 不一样，**它将一直绑定在指定的作用域中，之后的每次调用都会使用这个作用域。**

```javascript
MyThree.prototype.render = function () {
   //更新代码
   requestAnimationFrame(this.render.bind(this));//使用bind绑定当前this值

   this.renderer.render(this.scene, this.camera);
        };
```

# 参考

[Three.js入门指南](http://www.ituring.com.cn/minibook/792)
