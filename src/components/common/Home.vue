<template>
    <div class="wrapper">
        <v-head></v-head>
        <student-sidebar v-if="role=='0'"></student-sidebar>
        <coach-sidebar v-if="role=='1'"></coach-sidebar>
        <admin-sidebar v-if="role=='2'"></admin-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
// import vSidebar from './Sidebar.vue';
import studentSidebar from '../user/student/StudentMenu'
import coachSidebar from '../user/coach/CoachMenu'
import adminSidebar from '../user/admin/AdminMenu'
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            role:''
        };
    },
    components: {
        vHead,
        studentSidebar,
        coachSidebar,
        vTags,
        adminSidebar
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        this.role = localStorage.getItem('ms_role')

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
