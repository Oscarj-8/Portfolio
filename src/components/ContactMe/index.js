import { styled } from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const inputStyles = `
 font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 8px;
  border: 2px solid #6e8181;
  background: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #6e8181;
  font-weight: 400;
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0 2px 20px rgba(255, 255, 255, 0.2);
  }

  &:-webkit-autofill {
    background-color: transparent !important;
  }
`;

const ContactMeSection = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
  gap: 2em;
  margin-bottom: 2em;

  @media screen and (min-width: 992px) {
    gap: 0;
    flex-direction: row;
  }
`;

const ContactMeLeft = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1em;
  z-index: 2;

  @media screen and (min-width: 1200px) {
    text-align: left;
    align-items: start;
    margin-left: 4em;
  }
`;

const Title = styled.h1`
  margin: 0;
  @media screen and (min-width: 992px) {
    font-size: 2em;
  }

  @media screen and (min-width: 1200px) {
    width: 80%;
    font-size: 3em;
    font-weight: 600;
  }
`;

const Message = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.descriptionColor};
  font-weight: 600;
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const RightTopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
`;

const Description = styled.p`
  margin: 0 0 1em 0;
  font-size: 1.125em;
  color: #7e908e;
  font-weight: 500;

  @media screen and (min-width: 500px) {
    width: 85%;
  }
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
  padding: 1.5em;
  border-radius: 0.75em;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`;

const StyledField = styled(Field)`
  ${inputStyles}

  @media screen and (min-width: 500px) {
    padding: 0.6em;
    font-size: 1.15em;
  }
  @media screen and (min-width: 992px) {
    padding: 0.8em;
    font-size: 1em;
  }
`;

const customTextArea = styled.textarea`
  ${inputStyles};
  height: 13.125em;

  @media screen and (min-width: 500px) {
    padding: 0.6em;
    font-size: 1.15em;
  }
  @media screen and (min-width: 992px) {
    padding: 0.8em;
    font-size: 1em;
  }
`;

const ErrorMessageContainer = styled.div`
  color: #ff0000;
  margin-bottom: 8px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  padding: 1em 1.5em;
  background-color: #333;
  color: ${({ theme }) => theme.projectTagColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.buttonColor},
    ${({ theme }) => theme.secondaryColor}
  );

  &:hover {
    color: #d6c8e3;
    background: linear-gradient(
      to right,
      rgba(74, 29, 117, 0.5),
      rgba(27, 154, 130, 0.5)
    );
  }
`;

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
});

const ContactMe = () => {
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        resetForm();
        // Clear the success message after 5 second
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    }
  };

  return (
    <ContactMeSection id="contact">
      <ContactMeLeft>
        <Title>
          Let's chat.
          <br />
          Tell me about your Project
        </Title>
        <Message>🤟🏼 Let's create something cool together</Message>
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
          onSubmit={handleSubmit}
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
                <ErrorMessage id="subject" name="subject" className="error" />
              </ErrorMessageContainer>
            </div>
            <div>
              <Field
                as={customTextArea}
                id="message"
                name="message"
                placeholder="Message "
              />
            </div>

            <StyledButton type="submit">Send message</StyledButton>
          </StyledForm>
        </Formik>
        <div>
          {submissionStatus === "success" && (
            <div className="success-message">
              Email sent successfully! I will get back to you as soon as
              possible
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="error-message">
              Error sending email. Please try again later.
            </div>
          )}
        </div>
      </ContactMeRight>
    </ContactMeSection>
  );
};
export default ContactMe;
