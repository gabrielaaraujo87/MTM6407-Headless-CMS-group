<template>
  <div id="apps">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import  Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

router-link:hover {
  color: #358f70;
}
</style>
