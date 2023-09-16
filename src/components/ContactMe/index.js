import { styled } from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ContactMeSection = styled.div`
width: 100%;
display: grid;
place-items:: center;
grid-template-columns: 1fr;
color: #fff;
`;

const ContactMeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.descriptionColor};
`;

const TopSection = styled.p`
  background-color: #0f2338;
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
`;

const Header = styled.h3``;

const Description = styled.p``;

const GetInTouch = styled.h3``;

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
        <Message>Let's create something together</Message>
        <EmailSection>
          <TopSection>
            <FaRegEnvelope /> Mail me at
          </TopSection>
          <Email>mabdulahi954@gmail.com</Email>
        </EmailSection>
      </ContactMeLeft>
      <ContactMeRight>
        <Header>Contact me</Header>
        <Description>
          Please don't hesitate to get in touch with me for any inquiries or
          potential collaborations
        </Description>
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
