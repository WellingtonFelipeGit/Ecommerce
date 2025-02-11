import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [firstSection, setFirstSection] = useState([]);
  const [secondSection, setSecondSection] = useState([]);
  const [nameFirstSection, setNameFirstSection] = useState("");
  const [nameSecondSection, setNameSecondSection] = useState("");
  const [bannerCategory, setBannerCategory] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("");
  const [list, setList] = useState([]);
  const [totalValue, setTotalValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <ProductsContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
