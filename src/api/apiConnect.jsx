import axios from "axios";

const URL_BASE = "https://dummyjson.com/products";

const api = {
  async getProducts() {
    const response = await axios.get(`${URL_BASE}?limit=100`);
    const data = await response.data;
    console.log(data);

    return data;
  },
  async getCategories() {
    const response = await axios.get(`${URL_BASE}/categories`);
    const data = await response.data;
    return data;
  },
  async getCategoryType(type, clothes = false) {
    const response = await axios.get(`${URL_BASE}/category/${type}`);
    const data = await response.data["products"];
    const dataSlice = clothes ? data : data.slice(0, 4);
    return dataSlice;
  },

  async getProductId(id) {
    const response = await axios.get(`${URL_BASE}/${id}`);
    const data = await response.data;
    return data;
  },
};

export { api };
