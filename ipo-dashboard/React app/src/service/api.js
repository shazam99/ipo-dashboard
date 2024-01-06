
const BASE_URL = 'https://api.iex.cloud/v1';
const apiKey = process.env.REACT_APP_API_KEY;

const api = {
    getIPOs: async () => {
        try {
            const response = await fetch(`${BASE_URL}/data/CORE/UPCOMING_IPOS/market?token=${apiKey}`);

            if (!response.ok) {
                throw new Error('Failed to fetch IPO');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching IPO:', error);
            throw error;
        }
    },

    getTopCurrecnyConversion: async () => {
        try {
            const response = await fetch(`${BASE_URL}/fx/latest?symbols=USDCAD,GBPUSD,USDJPY,USDINR&token=${apiKey}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch Currency data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error Currency data:', error);
            throw error;
        }
    },

    getMyCurrency: async (currency) => {
        try {
            const response = await fetch(`${BASE_URL}/fx/latest?symbols=${currency}&token=${apiKey}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch Currency data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error Currency data:', error);
            throw error;
        }
    },

};

export default api;
