const BASE_URL = 'https://api.coinpaprika.com/v1';
const COIN_URL = `${BASE_URL}/coins`;

export const coins = () => fetch(COIN_URL).then((res) => res.json());
