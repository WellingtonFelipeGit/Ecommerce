import {
  DivStyled,
  ParagraphStyled,
  RiShoppingBagLineStyled,
} from "./HomeHeaderDetails";
import { FaCircle } from "react-icons/fa";

import { useUserInfoContext } from "../../../hooks/useUserInfoContext";
import { LinkStyled } from "../../LinkStyled";

const HomeHeaderDetails = () => {
  const { currentUserName } = useUserInfoContext();
  return (
    <DivStyled>
      <ParagraphStyled>
        {currentUserName ? currentUserName : "Visitor"}
      </ParagraphStyled>
      {currentUserName ? <FaCircle color="green" /> : <FaCircle color="gray" />}
      <LinkStyled to={"/cart"}>
        <RiShoppingBagLineStyled />
      </LinkStyled>
    </DivStyled>
  );
};

export default HomeHeaderDetails;
