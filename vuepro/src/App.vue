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


