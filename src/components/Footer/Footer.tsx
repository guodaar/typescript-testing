import Emoji from "../Emoji/Emoji";
import { mainBgColor } from "../../const/styles";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <h3>
          Vilnius Tech Jobs <Emoji symbol="🎉" />
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          dicta, eligendi adipisci accusamus minus cum esse atque cumque tenetur
          minima impedit libero quas! Iste perspiciatis rem minus cum, suscipit
          laborum!
        </p>
      </Container>

      <Container>
        <p>created 2023</p>
        <p>All wrights reserved</p>
      </Container>

      <Container>
        <h3>Contacts</h3>
        <p>Gedimino g. 12, Vilnius, Lithuania</p>
        <p>+370 644 32332</p>
        <p>vilniustj@techjobs.com</p>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  width: 100%;
  background-color: ${mainBgColor};
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: center;

  h3 {
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  p {
    font-size: 0.5rem;
  }
`;
