import { styled } from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const customTextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
`;

const ContactMeSection = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const ContactMeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1em;
`;

const Title = styled.h2`
  margin: 0;
`;

const Message = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 500;
`;

const EmailSection = styled.div`
  background-color: #0f2338;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.descriptionColor};
  padding: 1em;
  border-radius: 0.5em;
  gap: 1em;
  align-items: start;
`;

const TopSection = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  gap: 0.5em;
  font-weight: 900;
`;

const Email = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.projectTagColor};
  font-weight: 500;
`;

const ContactMeRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1em;
`;

const RightTopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Header = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.125em;
  color: #7e908e;
  font-weight: 500;
`;

const GetInTouch = styled.h3`
  margin-bottom: 2em;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 1em;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ErrorMessageContainer = styled.div`
  color: red;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactMe = () => {
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <ContactMeSection>
      <ContactMeLeft>
        <Title>
          Let's chat.
          <br />
          Tell me about yout Project
        </Title>
        <Message>🤟🏼 Let's create something together</Message>
        <EmailSection>
          <TopSection>
            <FaRegEnvelope style={{ fontWeight: "bold" }} /> Mail me at
          </TopSection>
          <Email>mabdulahi954@gmail.com</Email>
        </EmailSection>
      </ContactMeLeft>
      <ContactMeRight>
        <RightTopSection>
          <Header>Contact me</Header>
          <Description>
            Please don't hesitate to get in touch with me for any inquiries or
            potential collaborations
          </Description>
        </RightTopSection>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          <StyledForm>
            <GetInTouch>Get in touch</GetInTouch>
            <div style={{ width: "100%" }}>
              <StyledField type="text" id="fullName" name="fullName" />
              <ErrorMessageContainer>
                <ErrorMessage name="fullName" className="error" />
              </ErrorMessageContainer>
            </div>
            <div style={{ width: "100%" }}>
              <StyledField type="text" id="email" name="email" />
              <ErrorMessageContainer>
                <ErrorMessage name="email" className="error" />
              </ErrorMessageContainer>
            </div>
            <div style={{ width: "100%" }}>
              <StyledField type="text" id="subject" name="subject" />
              <ErrorMessageContainer>
                <ErrorMessage name="subject" className="error" />
              </ErrorMessageContainer>
            </div>
            <div style={{ width: "100%" }}>
              <Field as={customTextArea} id="message" name="message" />
              <ErrorMessageContainer>
                <ErrorMessage name="message" component="div" />
              </ErrorMessageContainer>
            </div>

            <StyledButton type="submit">Send message</StyledButton>
          </StyledForm>
        </Formik>
      </ContactMeRight>
    </ContactMeSection>
  );
};
export default ContactMe;
