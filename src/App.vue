<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

(function () {
  localStorage.setItem('username', 'Teacher');
  localStorage.setItem('password', 'noroff');
})();

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .theForm input {
    border: solid 3px teal;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
  }
</style>