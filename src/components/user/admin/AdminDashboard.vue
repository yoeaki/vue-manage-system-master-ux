<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" >
                    <div class="user-info">
                        <img src="../../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">
                                <span>{{name}}</span>
                                <span style="padding-left: 20px"><i class="el-icon-edit" type="primary" @click="editMyInfo" style="font-size: 24px;color: #67C23A;"></i></span>
                            </div>
                            <div style="color: #20a0ff">{{role}}</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{coachNum}}</div>
                                    <div>教练数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{announcementNum}}</div>
                                    <div>公告</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-phone-outline grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{coachAuditNum}}</div>
                                    <div>待审核数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-truck grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{studentNum}}</div>
                                    <div>学员数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-plus grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div>添加新模块</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import bus from '../../common/bus';
    import axios from 'axios'
    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                studentNum: '',
                coachNum: '',
                announcementNum: '无公告',
                coachAuditNum: '待审核',
                studentReservationNum:'',
                carNum: '0',
                ms_id: '',
                myInfo: {}
            };
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return '超级管理员';
            }
        },
        created() {
            this.ms_id = localStorage.getItem('ms_id');
            this.queryCarNum();
            this.queryStudentNum();
            this.queryStudentReservation();
            this.querySystemMsg();
            this.queryMyInfo();
            this.queryCoachAuditNum();
            this.queryCoachNum();
            this.queryAdminAnnouncement();
        },
        // activated() {
        //     this.handleListener();
        // },
        // deactivated() {
        //     window.removeEventListener('resize', this.renderChart);
        //     bus.$off('collapse', this.handleBus);
        // },
        methods: {
            changeDate() {
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                });
            },
            editMyInfo(){
                this.$router.push('/coachInfo');
            },
            queryStudentNum(){
                let path = '/api/student/student/count';
                let param = "studentNum";
                this.query(path,param);
            },
            queryCoachNum(){
                let path = '/api/coach/coach/count';
                let param = "coachNum";
                this.query(path,param);
            },
            queryStudentReservation(){
                let path = '/api/student/reservation/count';
                let param = "studentReservationNum";
                this.query(path,param);
            },
            queryAdminAnnouncement(){
                let path = '/api/admin/announcement/count';
                let param = "announcementNum";
                this.query(path,param);
            },
            queryCoachAuditNum(){
                let path = '/api/admin/verify/count';
                let param = "coachAuditNum";
                this.query(path,param);
            },
            querySystemMsg(){
                let path = '/api/student/evaluation/count/' + this.ms_id;
                let param = "systemMsg";
                this.query(path,param);
            },
            queryCarNum(){
                let path = '/api/coach/car/count/' + this.ms_id;
                let param = "carNum";
                this.query(path,param);
            },
            queryMyInfo(){
                let path = '/api/coach/coach/pro/' + this.ms_id;
                let param = "myInfo";
                this.query(path,param);
            },
            //封装查询方法
            query(path,params){
                let _this = this;
                axios.get(path).then(function(res) {
                    let data = res.data.data;
                    console.log(params + data)
                    if (params === 'studentNum') {
                        _this.studentNum = data;
                    }else if (params === 'coachNum'){
                        _this.coachNum = data;
                    }else if (params === 'systemMsg'){
                        _this.systemMsg = data;
                    } else if (params === 'carNum'){
                        _this.carNum = data;
                    }else if (params === 'studentReservation'){
                        _this.studentReservation = data;
                    }else if (params === 'myInfo'){
                        _this.myInfo = data;
                    }else if (params === 'coachAuditNum'){
                        _this.coachAuditNum = data;
                    }else if (params === 'announcementNum'){
                        _this.announcementNum = data;
                    }
                    params = res.data.data;
                    console.log(res.data.data)
                }).catch(function(error) {
                    console.log(error)
                })
            }
            // handleListener() {
            //     bus.$on('collapse', this.handleBus);
            //     // 调用renderChart方法对图表进行重新渲染
            //     window.addEventListener('resize', this.renderChart);
            // },
            // handleBus(msg) {
            //     setTimeout(() => {
            //         this.renderChart();
            //     }, 200);
            // },
            // renderChart() {
            //     this.$refs.bar.renderChart();
            //     this.$refs.line.renderChart();
            // }
        }
    };
</script>


<style scoped>
    .user-info-list {
        padding:10px 0px;
    }
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }



    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
    .user-info-list > span{
        text-align: right;
    }
</style>
