import { styled } from "styled-components";

const ContactMeSection = styled.div`
width: 100%;
display: grid;
place-items:: center;
grid-template-columns: 1fr 1fr;
`;

const ContactMeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2``;

const Message = styled.p``;

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.p``;

const Email = styled.p``;

const ContactMeRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3``;

const Description = styled.p``;

const ContactMe = () => {
  return (
    <ContactMeSection>
      <ContactMeLeft>
        <Title>
          Let's chat.
          <br />
          Tell me about yout Project
        </Title>
        <Message>Let's create something together</Message>
        <EmailSection>
          <TopSection>Mail me at</TopSection>
          <Email></Email>
        </EmailSection>
      </ContactMeLeft>
      <ContactMeRight>
        <Header></Header>
        <Description></Description>
      </ContactMeRight>
    </ContactMeSection>
  );
};
export default ContactMe;
