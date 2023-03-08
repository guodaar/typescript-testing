import { borderRadius, darkGrey, mainBgColor } from "../../const/styles"

import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {}

const Privacy = (props: Props) => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
    <Container>
      <h3>Privacy Policy:</h3>
      <p>At Fake Company, we take your privacy seriously. We collect only the information that is necessary to provide you with the best possible service. We will never sell or share your personal information with third parties unless required to do so by law.</p>
      <p>Terms of Service:
        Welcome to Fake Company! By using our services, you agree to the following terms and conditions: You are responsible for maintaining the security of your account and password. You may not use our services for any illegal or unauthorized purpose. We reserve the right to terminate your account at any time for any reason.</p>
      <p>Remember to customize the text to fit your specific business and website. Make sure to include any necessary legal disclaimers or disclosures required by law. It is recommended to have a lawyer review your privacy policy and terms of service to ensure that they comply with all applicable laws and regulations.</p>
      </Container>
      </motion.div>
  )
}

export default Privacy

const Container = styled.div`
  background-color: ${mainBgColor};
  margin: 50px 15vw;
  padding: 32px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${darkGrey};

  p {
    text-indent: 20px;
    line-height: 1.4;
  }
`;