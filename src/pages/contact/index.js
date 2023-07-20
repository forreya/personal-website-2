import React, { useMemo } from "react";
import {
  Container,
  LeftContainer,
  Input,
  InputData,
  Form,
  Row,
  Column,
  TextArea,
  Main,
  SubmitButton,
  RightContainer,
} from "../../styles/pages/Contact";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import { motion } from "framer-motion";

function Contact() {
  const Map = useMemo(() =>
    dynamic(() => import("../../components/Map"), { ssr: false })
  );

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent successfully.");
        },
        (error) => {
          console.log("Failed to send email: ", error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Contact Me | Ryan Lai</title>
      </Head>
      <LeftContainer>
        <Main>
          <PageTitle
            title="contact"
            stretchedLetter="n"
            overlayTitle="enquiries | questions | queries"
          />
          <Form onSubmit={sendEmail}>
            <Row>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Your Email Address"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
            </Row>
            <Column>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                name="subject"
                className="full-fill"
              >
                <Input type="text" name="subject" placeholder="Email Subject" required></Input>
                <div className="underline"></div>
              </InputData>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="full-fill"
              >
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  required
                ></TextArea>
                <div className="underline"></div>
              </InputData>
              <SubmitButton type="submit">
                <span>Submit</span>
              </SubmitButton>
            </Column>
          </Form>
        </Main>
      </LeftContainer>
      <RightContainer>
        <Map />
      </RightContainer>
    </Container>
  );
}

export default Contact;
