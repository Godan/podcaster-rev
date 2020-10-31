<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <v-layout justify-center v-row wrap>
      <v-btn fab dark color="indigo">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/HelloWorld.vue';

// import { ipcRenderer } from 'electron'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
const { ipcRenderer } = window.require('electron');
// ipcRenderer.invoke('testDialog', null);
</script>
