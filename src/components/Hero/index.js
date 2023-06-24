import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main,
} from "./styles";
import { Bounce, Fade } from "react-awesome-reveal";
import { BsEye } from "../../styles/Icons";
import { useRouter } from "next/router";
import nookies from "nookies";
import { BsJournalText } from "react-icons/bs";

function Hero() {
  const router = useRouter();
  const {theme} = nookies.get('theme')

  return (
    <Container>
      <Background image={background} />
      <Wrapper>
        <Main>
          <Fade top>
            <Title>
              <Letter className="stretch">H</Letter>
              <Letter>E</Letter>
              <Letter>Y</Letter>
              <Letter>, </Letter>
              <Letter>&nbsp;</Letter>
              <Letter>I</Letter>
              <Letter>&apos;</Letter>
              <Letter className="stretch">M</Letter>
            </Title>
          </Fade>
          <Fade top delay={100}>
            <SubTitle>
              <Letter>R</Letter>
              <Letter>Y</Letter>
              <Letter className="stretch">A</Letter>
              <Letter className="stretch">N</Letter>
            </SubTitle>
          </Fade>
          <Bounce top delay={600}>
            <About>
              Software <span>Developer</span>, Physics Graduate & Creative Enthusiast ✮
            </About>
          </Bounce>
        </Main>
        <HeroFooter>
          <Fade left delay={800}>
            <ViewButton onClick={() => router.push("/projects")}>
              <BsEye /> What I&apos;ve worked on...
            </ViewButton>
          </Fade>
          <Fade right delay={800}>
            <a href="/static/assets/Ryan_Lai_CV.pdf" download style={{ textDecoration: 'none' }}>
              <ContactButton>
                <BsJournalText /> Download CV
              </ContactButton>
            </a>
          </Fade>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;
