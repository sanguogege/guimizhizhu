<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';


// 圆心
const centerX = Math.round(window.innerWidth / 2), centerY = Math.round(window.innerHeight / 2);
// 半径
const circleR = 320;

let ballX = centerX, ballY = centerY - circleR;

const BeginX = ballX - 4;
const EndX = ballX - 2

const Circle: any = [];



function pathCircle() {
    let vr = 0.04, //每一帧转动的弧度值
        cos = Math.cos(vr), // 得到cos值
        sin = Math.sin(vr)// 得到sin值

    var x1 = ballX - centerX; //相对中心点的位置
    var y1 = ballY - centerY;

    var newX = x1 * cos - y1 * sin; //旋转一定角度后的位置
    var newY = y1 * cos + x1 * sin;

    ballX = centerX + newX; //更新球的位置
    ballY = centerY + newY;

    Circle.push({
        x: ballX,
        y: ballY
    })
    if (ballX >= BeginX && ballX <= EndX) {
        console.log("完成一周了");
        return
    }
    pathCircle();
}
pathCircle()

onMounted(() => {
    const line = gsap.timeline();
    line.from(".card ", { duration: 3, ease: "power2", y: -1700 })
    line.to(".card ", { duration: 3, ease: "power2", x: ballX, y: ballY })
    Circle.forEach((e: any) => {
        line.to(".card ", { duration: 0.02, ease: "power2", x: e.x, y: e.y, stagger: 1, rotation: 360 })
    });

})
</script>
<template>
    <div class="box">
        <div>卡罗牌1</div>
        <div>卡罗牌2</div>
        <div>卡罗牌3</div>
        <div>卡罗牌4</div>
        <div>卡罗牌5</div>
        <div>卡罗牌6</div>
        <div>卡罗牌7</div>
        <div>卡罗牌8</div>
        <div>卡罗牌9</div>
        <div>卡罗牌10</div>
        <div>卡罗牌11</div>
        <div>卡罗牌12</div>
        <div>卡罗牌13</div>
        <div>卡罗牌14</div>
        <div>卡罗牌15</div>
        <div>卡罗牌16</div>
        <div>卡罗牌17</div>
        <div>卡罗牌18</div>
        <div>卡罗牌19</div>
        <div>卡罗牌20</div>
        <div>卡罗牌21</div>
        <div>卡罗牌22</div>
    </div>
    <div class="card">
        这是一卡片
    </div>

    <div class="aa" v-for="item in Circle" :style="{ left: item.x + 'px', top: item.y + 'px' }">

    </div>
</template>
<style scoped>
.card {
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    margin-top: -120px;
    margin-left: -50px;
    background-color: beige;
}

.aa {
    position: absolute;
    display: block;
    width: 2px;
    height: 2px;
    background-color: antiquewhite;
}
</style>