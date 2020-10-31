module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      rendererProcessFile: 'src/views/main.ts',
    }
  }
}
