import { styled } from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const inputStyles = `
 font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 0.8em;
  margin-bottom: 8px;
  border: 2px solid #6e8181;
  background: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #6e8181;
  font-weight: 400;
  font-size: 1.25em;

  &:focus {
    outline: none;
    box-shadow: 0 2px 20px rgba(255, 255, 255, 0.4);
  }

  &:-webkit-autofill {
    background-color: transparent !important;
  }
`;

const customTextArea = styled.textarea`
  ${inputStyles};
  height: 13.125em;
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

const GetInTouch = styled.h2`
  margin: 0 0 1em 0;
  align-self: start;
`;

const StyledForm = styled(Form)`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #0f2338;
  padding: 1em;
  border-radius: 0.75em;
`;

const StyledField = styled(Field)`
  ${inputStyles}
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
            <div>
              <StyledField
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name *"
              />
              <ErrorMessageContainer>
                <ErrorMessage name="fullName" className="error" />
              </ErrorMessageContainer>
            </div>
            <div>
              <StyledField
                type="text"
                id="email"
                name="email"
                placeholder="Email address *"
              />
              <ErrorMessageContainer>
                <ErrorMessage name="email" className="error" />
              </ErrorMessageContainer>
            </div>
            <div>
              <StyledField
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject *"
              />
              <ErrorMessageContainer>
                <ErrorMessage name="subject" className="error" />
              </ErrorMessageContainer>
            </div>
            <div>
              <Field
                as={customTextArea}
                id="message"
                name="message"
                placeholder="Message "
              />
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
