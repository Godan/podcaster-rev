<template>
  <v-app>
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
      />
      <link
        rel="stylesheet"
        href="./src/renderer/assets/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
      />

      <link rel="script" href="https://code.getmdl.io/1.3.0/material.min.js" />

      <v-toolbar extended>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-fab-transition>
            <v-btn
              color="pink"
              fab
              dark
              small
              absolute
              bottom
              right
              @click="dialog = true"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>

      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">
            RSSを登録する
          </v-card-title>
          <v-card-text
            >ポッドキャストのRSS URLを直接登録することができます
            <v-text-field
              v-model="podcastName"
              label="ポッドキャスト名"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="rssUrl"
              label="RSS URL"
              outlined
              dense
            ></v-text-field
          ></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              キャンセル
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="
                dialog = false;
                addRssUrl();
              "
            >
              登録
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-bottom-navigation app>
        <v-card tile width="100%">
          <v-slider
            :v-model="50"
            color="orange darken-3"
            height="0"
            class="pa-0 ma-0"
            hide-details
          ></v-slider>
          <v-list class="pt-0 ma-0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle
                  >Fitz & The Trantrums</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
const { ipcRenderer } = window.require('electron');

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    dialog: false,
    rssUrl: '',
    podcastName: ''
  }),
  methods: {
    addRssUrl() {
      ipcRenderer.invoke('testDialog', {
        podcastName: this.podcastName,
        rssUrl: this.rssUrl
      });
    }
  }
});

// ipcRenderer.invoke('testDialog', null);
</script>
