const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    products: {
        list() {
            return callApi('/products');
        },
        create(product) {
            // throw new Error('500: Server error');
            return callApi(`/products`, {
                method: 'POST',
                body: JSON.stringify(product),
            });
        },
        read(productId) {
            return callApi(`/products/${productId}`);
        },
        update(productId, updates) {
            return callApi(`/products/${productId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(productId) {
            return callApi(`/products/${productId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;
