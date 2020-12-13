<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        mini-variant-width="50"
        :mini-variant="!drawer"
        :permanent="permanent"
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item
            v-show="route.props.isVisible"
            class="my-1 mx-2 rounded"
            :class="{ primary: isCurrentRoute(route) }"
            link
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }"
          >
            <v-icon :color="isCurrentRoute(route) ? 'white' : 'primary'">
              <!-- eslint-disable-next-line prettier/prettier -->
              {{ route.props.icon }}
            </v-icon>
            <v-list-item-content>
              <!-- eslint-disable-next-line prettier/prettier -->
              <span
                class="ml-4 font-weight-bold"
                :class="{
                  'white--text': isCurrentRoute(route),
                  'primary--text': !isCurrentRoute(route),
                }"
              >
                <!-- eslint-disable-next-line prettier/prettier -->
                {{ route.props.title }}
              </span>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-footer absolute>
            <v-switch
              v-show="drawer"
              label="Tema escuro"
              class="mx-2"
              color="accent"
              v-model="$vuetify.theme.dark"
            />
          </v-footer> -->
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-app-bar>
      <!--  -->
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <transition mode="out-in" name="fade">
                <router-view />
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    title() {
      return 'App';
    },
  },

  data() {
    return {
      drawer: null,
      permanent: true,
      mini: false,
      // removeCurrentRouteBox: false
    };
  },

  methods: {
    isCurrentRoute(route) {
      return this.$router.currentRoute.name === route.name;
    },
  },
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.3s ease;
}

.fade-leave-active {
  animation: fade-out 0.3s ease;
}
</style>
