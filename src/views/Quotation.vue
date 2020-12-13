<template>
  <v-container app fluid>
    <v-col justify="space-between" align="center" cols="12">
      <v-avatar color="white" size="50" v-if="coin">
        <v-img
          width="50px"
          height="50px"
          v-show="coin"
          :src="coin && coin.image && coin.image.small"
        />
      </v-avatar>

      <h2 class="secondary--text" v-if="!coin">
        Selecione uma moeda
      </h2>

      <div v-else>
        <h3 class="my-5">
          {{ coin.name }}
        </h3>

        <h2 class="primary--text" v-if="coin.market_data">
          {{ floatToCurrency(coin.market_data.current_price.brl) }}
        </h2>
      </div>

      <v-divider></v-divider>

      <v-row class="mt-5">
        <v-col
          v-for="availableCoin in availableCoins"
          :key="availableCoin.name"
          cols="12"
          lg="2"
          md="4"
          sm="4"
        >
          <v-btn
            color="accent"
            block
            outlined
            @click="() => getCoinById(availableCoin.name)"
          >
            {{ availableCoin.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// @ is an alias to /src
import floatToCurrency from '../utils/floatToCurrency';

export default {
  created() {
    this.$store.dispatch('getAllCoins');
  },

  computed: {
    coin() {
      return this.$store.state.coin;
    },

    availableCoins() {
      return this.$store.state.availableCoins;
    },
  },
  methods: {
    floatToCurrency,

    getCoinById(coinId) {
      this.$store.dispatch('getCoinById', coinId);
    },

    getAllCoins() {
      this.$store.dispatch('getAllCoins');
    },
  },
};
</script>
