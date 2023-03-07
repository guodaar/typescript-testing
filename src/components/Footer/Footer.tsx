import { borderRadius, mainBgColor } from "../../const/styles";

import Emoji from "../Emoji/Emoji";
import {FaGithub} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <h3>Vilnius Tech Jobs</h3>
        <StyledP>JobSite is a platform that connects job seekers with employers. We make it easy for you to find your dream job or find the perfect candidate for your organization.</StyledP>
      </Container>
     
      <Container>
      <StyledLink to={"/privacy"}>Privacy policy</StyledLink>
        <p>© 2023 TECH JOBS</p>
        <p>All rights reserved.</p>
        <StyledLink to="https://github.com/guodaar/typescript-testing.git"> <FaGithub /></StyledLink>
       
      </Container>

      <Container>
        <h3>Contacts</h3>
        <p>Gedimino g. 12, Vilnius, Lithuania</p>
        <p>Phone number: +370 644 32332</p>
        <p>Email: vilniustj@techjobs.com</p>
      </Container>
     
      
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 20px;
  width: 100%;
  background-color: #fdffffE6;
  justify-content: space-evenly;
`

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 0.7rem;
  margin-bottom: 5px;
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
`

const StyledP = styled.p`
  text-indent: 5px;
  line-height: 1.4;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 5px;
    font-size: 0.8rem;
  }

  p {
    font-size: 0.6rem;
    margin: 4px 0;
  }

  svg {
    font-size: 0.9rem;
  }
`
