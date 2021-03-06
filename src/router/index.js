import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/user/student/StudentReservation.vue'),
                    meta: { title: '学员预约记录' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/user/student/RreservationReply.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    path: '/process',
                    component: () => import('../components/page/Process.vue')
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/user/student/MyCoach.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                },
                //学生嵌套路由
                {
                    path: '/studentDashboard',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/student/StudentDashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/studentInfo',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/student/MyInfo.vue'),
                    meta: { title: '学员信息' }
                },
                {
                    path: '/studentEvaluation',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/student/StudentEvaluation.vue'),
                    meta: { title: '学员评论' }
                },
                //教练模块
                {
                    path: '/coachInfo',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/coach/MyInfo.vue'),
                    meta: { title: '我的个人信息' }
                },
                {
                    path: '/coachDashboard',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/coach/CoachDashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/myStudent',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/coach/MyStudent.vue'),
                    meta: { title: '学员信息' }
                },
                {
                    path: '/myReservation',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/coach/MyReservation.vue'),
                    meta: { title: '学员预约' }
                },
                //管理员模块
                {
                    path: '/adminInfo',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/MyInfo.vue'),
                    meta: { title: '我的个人信息' }
                },
                {
                    path: '/adminDashboard',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/AdminDashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/allStudent',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/AllStudent.vue'),
                    meta: { title: '学员信息' }
                },
                {
                    path: '/allCoach',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/AllCoach.vue'),
                    meta: { title: '教练信息' }
                },{
                    path: '/coachReservation',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/TeachArrange.vue'),
                    meta: { title: '教学安排' }
                },{
                    path: '/announcement',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/Announcement.vue'),
                    meta: { title: '公告信息' }
                },
                {
                    path: '/audit',
                    component: () => import(/* webpackChunkName: "register" */ '../components/user/admin/Audit.vue'),
                    meta: { title: '教练注册审核中心' }
                },
            ]
        },
        ////学员路由
        {
            path: '/studentLogin',
            component: () => import(/* webpackChunkName: "login" */ '../components/user/student/StudentLogin.vue'),
            meta: { title: '登录' }
        },
        //教练路由
        {
            path: '/studentRegister',
            component: () => import(/* webpackChunkName: "register" */ '../components/user/student/StudentRegister.vue'),
            meta: { title: '注册' }
        },
        {
            path: '/coachLogin',
            component: () => import(/* webpackChunkName: "login" */ '../components/user/coach/CoachLogin.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/coachRegister',
            component: () => import(/* webpackChunkName: "register" */ '../components/user/coach/CoachRegister.vue'),
            meta: { title: '注册' }
        },
        //管理员登录路由
        {
            path: '/adminLogin',
            component: () => import(/* webpackChunkName: "login" */ '../components/user/admin/AdminLogin.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
