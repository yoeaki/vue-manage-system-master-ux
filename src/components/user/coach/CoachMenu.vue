<template>
    <div>
        <el-col :span="12">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>预约练车</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">预约教练</el-menu-item>
                        <el-menu-item index="1-2">预约记录</el-menu-item>
                        <el-menu-item index="1-3">处理记录</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>我的教练</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">教练信息</el-menu-item>
                        <el-menu-item index="2-2">教练学员</el-menu-item>
                        <el-menu-item index="2-3">学员评价</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">关于平台</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
  name: 'CoachMenu'
}
</script>

<style scoped>

</style>
