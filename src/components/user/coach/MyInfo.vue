<template>
    <div>
        <el-card class="box-card">
            <div class="container" style="float: left">
                <div class="form-box" >
                    <div class="margin-box">个人基本信息</div>
                    <el-form ref="form" :model="coach" label-width="60px">
                        <el-form-item label="id">
                            <el-input
                                    v-model="coach.id"
                                    :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input
                                    v-model="coach.username">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-input
                                    v-model="coach.sex">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input
                                    v-model="coach.password" type="password">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="报价">
                            <el-input
                                    v-model="coach.price">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input
                                    v-model="coach.phone">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="电子邮箱">
                            <el-input
                                    v-model="coach.email">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input
                                    v-model="coach.address">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="update">修改完成</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="container" style="float: left">
                <div>
                    <div class="margin-box">
                        <span>车辆信息</span>
                    </div>
                    <el-table
                            :data="cars"
                            style="width: 100%; text-align: center">
                        <el-table-column
                                prop="id"
                                label="车牌编号"
                                width="120px">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="车辆名称"
                                width="120px">
                        </el-table-column>
                        <el-table-column
                                prop="number"
                                label="车牌号"
                                width="120px">
                        </el-table-column>
                        <el-table-column
                                prop="number"
                                label="操作"
                                width="120px">
                            <template slot-scope="scope">
                                <el-button
                                        type="text"
                                        icon="el-icon-delete"
                                        class="red"
                                        @click="handleDelete(scope.row.id, scope.$index, scope.row)"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="margin-top: 15px">
                        <span style="margin-right: -5px">
                              <el-button @click="handleAdd"  type="success">
                                  <i class="el-icon-plus"></i>
                                  新增车辆
                              </el-button>
                    </span>
                    </div>
                    <!-- 编辑弹出框 -->
                    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
                        <el-form ref="form" :model="form" label-width="70px">
                            <el-form-item label="车辆名称">
                                <el-input v-model="car.name"></el-input>
                            </el-form-item>
                            <el-form-item label="车牌号">
                                <el-input v-model="car.number"></el-input>
                            </el-form-item>
                        </el-form>
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCar">确 定</el-button>
                </el-dialog>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Coachcoach',
        data() {
            return {
                editVisible: false,
                coach: {
                    id:'',
                    username: '',
                    password: '',
                    sex: '',
                    phone: '',
                    email: '',
                    address: '',
                    schoolId: '',
                    price: '',
                    role: ''
                },
                car: {
                    coachId: '',
                    name:'',
                    number:''
                },
                cars: []

            }
        },
        created() {
            this.queryCoach()
            this.queryCar()
        },
        methods: {
            queryCoach(){
                let _this = this;
                let path = '/api/coach/coach/';
                console.log("路劲" + path)
                console.log("id" + localStorage.getItem('ms_id'))
                axios.get(path + localStorage.getItem('ms_id')).then(function(res) {
                    console.log(res)
                    let data = res.data.data;
                    _this.coach = data;
                    console.log(data)
                    console.log(_this.coach)
                    _this.coach.id = data.id;
                    _this.coach.username = data.username;
                    _this.coach.password = data.password;
                    _this.coach.sex = data.sex;
                    _this.coach.email = data.email;
                    _this.coach.address = data.address;
                    _this.coach.price = data.price;
                    _this.coach.role = data.role;
                }).catch(function(error) {
                    console.log(error)
                })
            },
            update(){
                console.log(this.coach)
                let _this = this;
                this.$message.success('提交成功！');
                axios.put('/api/coach/coach/modify',_this.coach).then(function(res) {
                    let data = res.data;
                    _this.$message.success(data.msg);
                    _this.$router.push('/coachInfo')
                })
            },
            queryCar(){
                let _this = this;
                let path = '/api/coach/car/coach/';
                console.log("id" + localStorage.getItem('ms_id'))
                axios.get(path + localStorage.getItem('ms_id')).then(function(res) {
                    console.log(res)
                    let data = res.data.data;
                    _this.cars = data;
                }).catch(function(error) {
                    console.log(error)
                })
            },
            handleAdd(){
                this.editVisible = true;
            },
            addCar(){
                let _this = this;
                _this.car.coachId = localStorage.getItem('ms_id');
                axios.post('/api/coach/car',this.car).then(function(res) {
                    let data = res.data;
                    _this.$message.success(data.msg);
                    _this.editVisible = false;
                    _this.flush()
                })
            },
            handleDelete(id, index, row) {
                let _this = this
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    axios.delete('/api/coach/car/' + id).then(function(data) {
                        _this.$message.success("删除成功");
                        _this.cars.splice(index, 1);
                    })
                }).catch(() => {});
            },
            flush(){
                this.queryCar();
            }
        }
    };
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .margin-box {
        margin-bottom: 15px;
        color: #409EFF;
    }
</style>
