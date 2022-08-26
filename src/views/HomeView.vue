<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <nav>
      <router-link to="/projects/1">Project one</router-link>
      <span> | </span>
      <router-link to="/projects/2">Project two</router-link>
      <span> | </span>
      <router-link to="/projects/3">Project three</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
