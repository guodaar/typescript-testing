import Button from "../Button/Button";
import StyledModal from "../StyledModal/StyledModal";
import Switch from "react-switch";
import { lighterBlue } from "../../const/styles";
import styled from "styled-components";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState } from "react";

const CookiesModal = () => {
  const [showMore, setShowMore] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(true);
  const [checkedPersonalise, setCheckedPersonalise] = useState(true);
  const [cookiesAcepted, setCookiesAcepted] = useLocalStorage("cookies", false);
  const [open, setIsOpen] = useState(!cookiesAcepted);

  const handleToggleModal = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleSwitchStorage = () => {
    setCheckedStorage((prevSwitch) => !prevSwitch);
  };

  const handleSwitchPersonalise = () => {
    setCheckedPersonalise((prevSwitch) => !prevSwitch);
  };

  const handleAcceptCookies = () => {
    setCookiesAcepted(true);
    handleToggleModal();
  };

  return (
    <StyledModal modalSize="large" modalIsOpen={open}>
      <CookieNotificationContainer>
        {showMore ? (
          <ShowMoreTextContainer>
            <h3>What are Cookies?</h3>
            <Text>
              Cookies are small text files that are stored on a user's device (such as a computer or
              mobile device) when they visit a website. Cookies contain information about the user's
              browsing behavior and preferences, such as the pages they have visited, the items they
              have added to their shopping cart, or their login credentials for a particular
              website.
            </Text>
            <h3>We value your privacy</h3>
            <Text>
              You can set your consent preferences and determine how you want your data to be used
              based on the purposes below. You may set preferences for us independently from those
              of third-party partners. Each purpose has a description so that you know how we and
              partners use your data.
            </Text>

            <CookieSelectVarint>
              <div>
                <h4>Infromation storage and acess</h4>
                <Text>
                  The storage of information, or access to infromation that is already stored, on
                  your device such as advertising indentifiers, cookies, and similar technologies
                </Text>
              </div>
              <Switch
                onChange={handleSwitchStorage}
                checked={checkedStorage}
                height={20}
                width={50}
                handleDiameter={10}
                onColor={lighterBlue}
              ></Switch>
            </CookieSelectVarint>
            <CookieSelectVarint>
              <div>
                <h4>Personalisation</h4>
                <Text>
                  The collection and processing of the information about your use of this service to
                  subsequently personalise advertising and/or content for you in other contexts,
                  such as on other websites or apps, over time. Typically, the content of the site
                  or app is used to make inferences about your interests, which inform future
                  selection of advertising and/or content.
                </Text>
              </div>
              <Switch
                onChange={handleSwitchPersonalise}
                checked={checkedPersonalise}
                height={20}
                width={50}
                handleDiameter={10}
                onColor={lighterBlue}
              ></Switch>
            </CookieSelectVarint>
          </ShowMoreTextContainer>
        ) : (
          <TextContainer>
            <Text>
              We use cookies to enhance your browsing experience and provide you with personalized
              content. By continuing to use our website, you consent to our use of cookies.
            </Text>
            <Text>
              You can manage your cookie preferences by clicking on the "Cookie Settings" link at
              the bottom of any page on our website. For more information about cookies and how we
              use them, please see our Privacy Policy.
            </Text>
          </TextContainer>
        )}
        <ButtonContainer>
          <Button onClick={handleAcceptCookies} title="Accept Cookies" />
          {!showMore && <Button onClick={handleShowMore} title="Cookie Settings" greyVariant />}
        </ButtonContainer>
      </CookieNotificationContainer>
    </StyledModal>
  );
};

export default CookiesModal;

const CookieNotificationContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 50px;
`;
const Text = styled.p``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 4;
  width: 70%;
`;

const ShowMoreTextContainer = styled(TextContainer)`
  overflow-y: initial;
`;

const ButtonContainer = styled.div`
  flex: 1;
  width: 30%;
`;

const CookieSelectVarint = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  background-color: #f9f9f9f9;
  align-items: center;

  h4 {
    margin-bottom: 8px;
  }
`;
