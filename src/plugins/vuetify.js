import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    default: 'light',
    themes: {
      light: {
        primary: '#9536f5',
        accent: '#04d361',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FB8C00',
      },
      dark: {
        primary: '#04d361',
      },
    },
  },
});
