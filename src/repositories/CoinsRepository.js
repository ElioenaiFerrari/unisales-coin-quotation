import Api from '../config/Api';

const CoinsRepository = {
  async getCoinById(coinId = 'bitcoind') {
    try {
      const date = new Date();
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();

      const response = await Api.get(`/${coinId}/history`, {
        params: { date: `${day}-${month}-${year}` },
      });

      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  },
};

export default CoinsRepository;
