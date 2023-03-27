<script setup lang="ts">
import { switchArray } from "@/utils/checkdata"
import { useDataBase } from "@/utils/webDb";
import gsap from 'gsap';
import { ElMessage } from 'element-plus'

import calendar from "yz-calendar";
import { onMounted } from "vue";
// console.log(calendar.solar2lunar(2021, 3, 21));

import { useRouter } from "vue-router";


import Button from "@/components/home/table";

const router = useRouter();


// 使用数据库
const database: any = useDataBase();

// 获取指定表的数据list
const gatherDocument = await database.gather.find().exec();

const dataAll = switchArray(gatherDocument, true);


const colyuanzhi = {
    name: "",
}

const colzhizhu = {
    name: "",
}

const spanMethod = ({ row,
    column }: any) => {
    if (column.label == "源质") {
        if (colyuanzhi.name != row.yuan.name) {
            colyuanzhi.name = row.yuan.name
            return [row.colspan, 1]
        } else {
            return [0, 0]
        }
    }
    if (column.label == "旧日称号") {
        if (colzhizhu.name != row.yuan.title) {
            colzhizhu.name = row.yuan.title
            return [row.colspan, 1]
        } else {
            return [0, 0]
        }
    }
}

const bgSet: any = {
    "源堡": { string: "源堡", column: [7, 8, 9, 14, 15], name: "yuanbao" },
    "永暗之河": { string: "永暗之河", column: [6, 7, 8, 9, 14, 15], name: "yonganzhihe" },
    "混沌海": { string: "混沌海", column: [6, 7, 8, 9, 14, 15], name: "hundunhai" },
    "知识荒野": { string: "知识荒野", column: [6, 7, 8, 9, 14, 15], name: "zhishihuangye" },
    "失序之国": { string: "失序之国", column: [6, 7, 8, 9, 14, 15], name: "shixuzhiguo" },
    "灾祸之城": { string: "灾祸之城", column: [6, 7, 8, 9, 14, 15], name: "zaihuozhicheng" },
    "母巢": { string: "母巢", column: [6, 7, 8, 9, 14, 15], name: "muchao" },
    "暗影世界": { string: "暗影世界", column: [6, 7, 8, 9, 14, 15], name: "anyingshijie" },
}

const cellClassSet = ({ row, columnIndex }: any) => {
    if (row.yuan.name != "光之钥") {
        const target = bgSet[row.yuan.name];
        if (row.yuan.name == target.string) {
            if (target.column.includes(columnIndex)) {
                return target.name;
            }
        }
    }
}


onMounted(() => {
    //const line = gsap.timeline();
    //line.from(".xx212 ", { duration: 4, ease: "power2", opacity: 0, y: -1600 })
})

</script>

<template>
    <Button></Button>
<!-- <el-table class="main" :cell-class-name="cellClassSet" :border="true" :data="dataAll" :span-method="spanMethod">
        <el-table-column class="main_box" align="center" label="诡秘之主序列途径一览">
            <el-table-column width="140" align="center" label="序列权柄">
                <template #default="scope">
                    <router-link :to="'/sequence/' + scope.row.name">{{ scope.row.power }}</router-link>
                </template>
            </el-table-column>
                <el-table-column width="80" align="center" label="序列九" prop="9">
                                                                <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[9].type + '/' + scope.row[9].name">{{ scope.row[9]name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列八" prop="8">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[8].type + '/' + scope.row[8].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列七" prop="7">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[7].type + '/' + scope.row[7].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列六" prop="6">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[6].type + '/' + scope.row[6].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列五" prop="5">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[5].type + '/' + scope.row[5].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列四" prop="4">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[4].type + '/' + scope.row[4].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列三" prop="3">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[3].type + '/' + scope.row[3].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列二" prop="2">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[2].type + '/' + scope.row[2].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列一" prop="1">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[1].type + '/' + scope.row[1].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="序列零" prop="0">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/sequence/' + scope.row[0].type + '/' + scope.row[0].name">{{ scope.row.name
                                                                                }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="140" align="center" label="主要途径组织">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/way/' + scope.row.org.name">{{ scope.row.org.name }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="塔罗牌">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/taluopai/' + scope.row.taluopai.name">{{ scope.row.taluopai.name }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="140" align="center" label="现存高位者">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/role/' + scope.row.top.name">{{ scope.row.top.name }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column width="80" align="center" label="源质">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/yuan/' + scope.row.yuan.name">{{ scope.row.yuan.name }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                        <el-table-column align="center" prop="yuan.title" label="旧日称号">
                                                                            <template #default="scope">
                                                                                <router-link :to="'/yuan/' + scope.row.taluopai.name">{{ scope.row.yuan.name }}</router-link>
                                                                            </template>
                                                                        </el-table-column>
                                                                    </el-table-column>
                                                                </el-table> -->
</template>
<style scoped>
.main {
    width: 1600px;
    margin: auto;
}

.main_box {
    width: 100%;
}
</style>
