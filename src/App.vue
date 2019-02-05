<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">用户管理系统</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">主页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">关于我们</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/add">添加用户</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
