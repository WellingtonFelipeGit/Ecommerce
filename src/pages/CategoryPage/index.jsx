import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { LinkStyled } from "../../components/LinkStyled";
import { RiHomeFill } from "react-icons/ri";
import {
  CategoriesContainer,
  CategorySelected,
  CategoryTitle,
} from "./CategoryPageStyles";
import { useProductsContext } from "../../hooks/useProductsContext";
import Card from "../../components/Card";

const CategoryPage = () => {
  const { getCurrentCategory, currentCategory, getAllProducts } =
    useProductsContext();
  const params = useParams();

  useEffect(() => {
    params.id === "all" ? getAllProducts() : getCurrentCategory(params.id);
  }, [params.id]);

  return (
    <>
      <Header>
        <LinkStyled color={"black"} to={"/"}>
          <RiHomeFill size={30} />
        </LinkStyled>
        <CategoryTitle>Category</CategoryTitle>
      </Header>
      <CategorySelected>{params.id}</CategorySelected>
      <CategoriesContainer>
        {currentCategory != ""
          ? currentCategory.map((item) => (
              <Card
                key={item.id}
                item={item}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                descount={(
                  item.price -
                  (item.price / 100) * item.discountPercentage
                ).toFixed(2)}
              />
            ))
          : ""}
      </CategoriesContainer>
    </>
  );
};

export default CategoryPage;
