<script setup lang="ts">
import SideMenu from './components/Menu.vue'
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px" class="side-menu">
      <side-menu/>
    </el-aside>

    <el-container>
      <el-header class="header">
        🌵 Hello, This is Bibi's Blog 🌵
      </el-header>

      <el-main class="main">
        <router-view/>
      </el-main>

      <el-footer class="footer">
        <a href="https://www.flaticon.com/kr/free-icons/" title="발 아이콘">발 아이콘  제작자: Us and Up - Flaticon</a>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
}

.side-menu {
  border-right: solid 1px wheat;
  background-color: floralwhite;
  box-shadow: 2px 2px 2px 1px ghostwhite;
}

.side-menu::-webkit-scrollbar {
  display: none;
}

.header {
  text-align: center;
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  font-family: Maplestory,serif;
}

.main {

}

.footer {
  height: 50px;
  line-height: 50px;
}
</style>
