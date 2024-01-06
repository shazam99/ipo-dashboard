import { NATIVE_APP_API_KEY } from '@env';

const BASE_URL = 'https://cloud.iexapis.com/stable';

const api = {
    getStocks: async () => {
        try {
            const response = await fetch(`${BASE_URL}/ref-data/symbols?token=${NATIVE_APP_API_KEY}`);

            if (!response.ok) {
                throw new Error('Failed to fetch Stocks');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching Stocks:', error);
            throw error;
        }
    },

    getSingleStock: async (stock) => {
        try {
            const response = await fetch(`${BASE_URL}/stock/${stock}/quote?token=${NATIVE_APP_API_KEY}`);

            if (!response.ok) {
                throw new Error(`Failed to ${stock} data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    getChartData: async (stock, range) => {
        try {
            const response = await fetch(`${BASE_URL}/stock/${stock}/chart/${range}?token=${NATIVE_APP_API_KEY}`);

            if (!response.ok) {
                throw new Error(`Failed to ${stock} data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    getFavStocks: async (favs) => {
        if (favs.length !== 0) {
            try {
                const apiUrl = symbol => `${BASE_URL}/stock/${symbol}/quote?token=${NATIVE_APP_API_KEY}`;

                const responses = await Promise.all(favs.map(symbol => fetch(apiUrl(symbol))));

                const data = await Promise.all(responses.map(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                }));

                return data;
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        } else {
            return [];
        }
    }
};

export default api;
