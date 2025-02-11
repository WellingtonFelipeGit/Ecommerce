import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import HomeHeaderDetails from "../../components/Header/HomeHeaderDetails";
import Section from "../../components/Section";
import { useEffect, useState } from "react";

import { MainStyled, IoMdMenuStyled, LogoStyled } from "./HomePageStyles";
import { useProductsContext } from "../../hooks/useProductsContext";

const HomePage = () => {
  const [active, setActive] = useState(false);

  const { getCategories, bannerCategory } = useProductsContext();

  useEffect(() => {
    if (!bannerCategory || bannerCategory.length === 0) {
      getCategories();
    }
  }, []);

  return (
    <>
      <Header>
        <LogoStyled>Boy Sales</LogoStyled>
        <IoMdMenuStyled size={40} onClick={() => setActive(true)} />
        <Menu active={active} onClose={() => setActive(false)} />
        <HomeHeaderDetails />
      </Header>
      <MainStyled>
        <Banner items={bannerCategory} />
        <Section />
      </MainStyled>
    </>
  );
};

export default HomePage;
