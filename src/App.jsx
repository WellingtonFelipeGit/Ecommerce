import { BrowserRouter } from "react-router-dom";
import { register } from "swiper/element";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { UserInfoProvider } from "./context/UserInfoContext";
import { ProductContextProvider } from "./context/ProductsContext";

const AppContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  padding: 0 27px;
  box-sizing: border-box;
  margin: auto;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <ProductContextProvider>
          <UserInfoProvider>
            <GlobalStyles />
            <AppRoutes />
          </UserInfoProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
