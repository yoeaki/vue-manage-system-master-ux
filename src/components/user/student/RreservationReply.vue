<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 预约
                </el-breadcrumb-item>
                <el-breadcrumb-item>预约填写</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="reservation" label-width="80px">
                    <el-form-item label="学员">
                        <el-input
                                v-model="reservation.studentName"
                                :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="教练">
                        <el-input
                                v-model="reservation.coachName"
                                :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="reservation.startTime"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                placeholder="选择时间"
                                v-model="reservation.startTime"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="结束时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="reservation.endTime"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                placeholder="选择时间"
                                v-model="reservation.endTime"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="预约备注">
                        <el-input type="textarea" rows="5" v-model="reservation.remarks"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">点击预约</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

export default {
    name: 'baseform',
    data() {
        return {
            reservation:{
                studentId: '',
                coachId: '',
                startTime: '',
                endTime: '',
                schedule: '0',
                remarks: '',
                studentName: '',
                coachName: '',
            },

        };
    },
    created(){
        this.getStudent();
    },
    methods: {
        onSubmit() {
            console.log(this.reservation)
            let _this = this;
            this.$message.success('提交成功！');
            axios.post('/api/student/reservation',this.reservation).then(function(res) {
                let data = res.data;
                _this.$message.success(data.msg);
                _this.$router.push('/table')
            })
        },
        getStudent() {
            console.log(localStorage.getItem('ms_id'))
            let studentId = localStorage.getItem('ms_id')
            console.log(studentId)
            let path = '/api/student/student/pro/' + studentId;
            console.log(path)
            let _this = this;
            axios.get(path).then(function(res) {
                let data = res.data.data;
                _this.reservation.studentId = data.id;
                _this.reservation.studentName = data.username;
                _this.reservation.coachId = data.coachId;
                console.log(_this.reservation.studentName)
                console.log( _this.reservation.coachId)
                console.log("====================")
                _this.getCoach()
            }).catch(function(error) {
                console.log(error)
            })
        },
        getCoach() {
            let _this = this;
            console.log( "cccc" + _this.reservation.coachId)
            let path = '/api/coach/coach/pro/' + _this.reservation.coachId;
            console.log(path)
            axios.get(path).then(function(res) {
                let data = res.data.data;
                _this.reservation.coachName = data.username;
                console.log(_this.reservation.coachName)
                console.log(_this.reservation.studentName)
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
};
</script>
