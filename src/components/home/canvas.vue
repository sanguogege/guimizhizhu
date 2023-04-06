<script setup lang="ts">
import { Application, Graphics, Text } from "pixi.js"
import { onMounted } from "vue";





onMounted(() => {
    let app: any = new Application({ resizeTo: window, backgroundColor: "#1182af" });
    let d1: any = document.getElementById('d1')
    // 将画布添加到d1元素里
    d1.appendChild(app.view)

    const graphics: any = new Graphics();
    graphics.lineStyle(2, 0x000, 0.3)
    graphics.beginFill("ffffff")
    graphics.drawRect(600, 300, 200, 100)
    graphics.endFill()

    const text = new Text(
        "雷猴",
        {
            fontFamily: 'Arial', // 字体
            fontSize: 36, // 字号
            fill: '0x000', // 填充色
            stroke: 'red', // 描边颜色
            strokeThickness: 2 // 描边宽度，默认是0
        }
    )
    text.x = 600;
    text.y = 300;
    text.eventMode = "dynamic";
    text.cursor = 'pointer';
    text.on("click", (e: any) => {
        console.log(e);
    })

    graphics.addChild(text)
    app.stage.addChild(graphics)


})

</script>
<template>
    <div id="d1">

    </div>
</template>
<style scoped></style>