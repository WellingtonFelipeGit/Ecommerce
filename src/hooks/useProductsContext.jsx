import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { api } from "../api/apiConnect";
import { addItemCart, removeItemCart, getCartList } from "../api/authService";

export const useProductsContext = () => {
  const {
    firstSection,
    setFirstSection,
    secondSection,
    setSecondSection,
    nameSecondSection,
    setNameSecondSection,
    nameFirstSection,
    setNameFirstSection,
    bannerCategory,
    setBannerCategory,
    currentProduct,
    setCurrentProduct,
    list,
    setList,
    totalValue,
    setTotalValue,
    currentCategory,
    setCurrentCategory,
  } = useContext(ProductsContext);

  const drawItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getCategories = async () => {
    const response = await api.getCategories();
    const categories = response;
    const firstCategory = drawItem(categories);
    const secondCategory = drawItem(categories);
    const bannerCategory = drawItem(categories);

    setNameFirstSection(firstCategory.name);
    setNameSecondSection(secondCategory.name);

    setFirstSection(await api.getCategoryType(firstCategory.slug, true));
    setSecondSection(await api.getCategoryType(secondCategory.slug, true));
    setBannerCategory(await api.getCategoryType(bannerCategory.slug));
  };

  const getCurrentCategory = async (type) => {
    setCurrentCategory(await api.getCategoryType(type));
  };

  const getAllProducts = async () => {
    const response = await api.getProducts();
    setCurrentCategory(response.products);
  };

  const getId = async (id) => {
    setCurrentProduct(await api.getProductId(id));
  };

  const addCart = async (id, item = currentProduct) => {
    const obj = {
      id: item.id,
      name: item.title,
      description: item.description,
      price: item.price,
      img: item.thumbnail,
      qtd: 1,
    };
    await addItemCart(id, obj);
  };

  const removeCart = async (id, itemId) => {
    await removeItemCart(id, itemId);
  };

  const getList = async (id) => {
    const response = await getCartList(id);
    setList(response);
  };

  const getTotalValue = () => {
    const value = list.map((item) => item.qtd * item.price);
    const totalValue = value.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalValue(totalValue);
  };

  return {
    firstSection,
    secondSection,
    getCategories,
    nameFirstSection,
    nameSecondSection,
    bannerCategory,
    setCurrentProduct,
    currentProduct,
    getId,
    addCart,
    removeCart,
    getList,
    list,
    totalValue,
    getTotalValue,
    currentCategory,
    getCurrentCategory,
    getAllProducts,
  };
};
