<template>
    <div>
        <el-container>
            <el-header style="background-color: #545c64">
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <StudentMenu></StudentMenu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import StudentMenu from './StudentMenu'
import Header from '../components/Header'
export default {
  name: 'Student',
  components: {
    StudentMenu,
    Header
  }
}
</script>

<style>

</style>
