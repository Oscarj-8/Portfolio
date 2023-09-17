import { styled } from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  width: 100%;
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
`;

const TopSection = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Email = styled.p`
  margin: 0;
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
  color: #7E908E;
  font-weight: 500;
}
`;

const GetInTouch = styled.h3`
  margin: 0;
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
            <FaRegEnvelope /> Mail me at
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
          <Form>
            <GetInTouch>Get in touch</GetInTouch>
            <div>
              <Field type="text" id="fullName" name="fullName" />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="text" id="subject" name="subject" />
              <ErrorMessage name="subject" component="div" />
            </div>
            <div>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button type="submit">Send message</button>
          </Form>
        </Formik>
      </ContactMeRight>
    </ContactMeSection>
  );
};
export default ContactMe;
