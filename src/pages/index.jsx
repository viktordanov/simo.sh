import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import tw from 'tailwind.macro';
// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
// Elements
import Inner from '../elements/Inner';
import { BigTitle, Subtitle, Title } from '../elements/Titles';
// Images
import avatar from '../images/avatar.png';
import etg from '../images/etgscrot.png';
import lb from '../images/iphonex.png';
import osugit from '../images/osugit.png';
import osuspeed from '../images/osuspeed.png';
import postbank from '../images/postbank.png';
// Views
import About from '../views/About';
import Contact from '../views/Contact';
// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-black font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Sup,
          <br />
          I'm Simo Aleksandrov.
        </BigTitle>
        <Subtitle>Web & Mobile Developer from Ruse, Bulgaria</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="English Test Generator"
            link="https://etgproject.tk"
            bg="linear-gradient(to right, #D9453A 0%, #ea528a 100%)"
            img={[etg]}
          >
            📕 Creating tests has never been easier.
          </ProjectCard>
          <ProjectCard
            title="LuncherBox"
            link="https://luncherbox.deliriumproducts.me"
            bg="linear-gradient(to right, #d56aa0 0%, #bc4b84 100%)"
            img={[lb]}
          >
            🍖 Cheap to set up web application for making orders without having
            to wait for waiters..
          </ProjectCard>
          <ProjectCard
            title="Postbank Calendar"
            link="https://github.com/deliriumproducts/postbank-calendar"
            bg="linear-gradient(to right, rgba(57,94,185,1) 20%, #6ca3fc 80%)"
            img={[postbank]}
          >
            📅 Mobile calendar, made for Postbank. Available on Android and iOS
          </ProjectCard>
          <ProjectCard
            title="osu!git"
            link="https://github.com/deliriumproducts/osu-git"
            bg="linear-gradient(to right, #ff98c1 0%, #ffc6dd 100%)"
            img={[osugit]}
          >
            🔄 simplistic git client made with osu!mappers in mind.
          </ProjectCard>
          <ProjectCard
            title="osu!speed"
            link="https://osu-speed.simo.sh"
            bg="linear-gradient(to right, #FF64A8 0%, #fc8fbf 100%)"
            img={[osuspeed]}
          >
            🏃 Check how fast you can stream in osu!
          </ProjectCard>
          <ProjectCard
            title="osu!pass-checker"
            link="https://osu-pass.simo.sh"
            bg="linear-gradient(to right, #ff3a61  0%, #f76f89 100%)"
          >
            ✔ Simple web tool to check whether you've passed a map or not when
            using NF.!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            My name is Simo Aleksandrov, but go under the nickname "fr3fou".
            <br />
            I'm just a 17 year old boy that likes to code, play video games,
            listen to music and watch anime.
            <br />
            I'm in the 10th grade of "MG Baba Tonka" in Ruse, Bulgaria.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I've been coding since I was in the 4th grade, but only during the
          last year (2018), did I get more involved. I primarily do web and
          mobile development, but have knowledge in desktop development using C#
          / Java too. I use Linux (more specifically Arch / Antergos) as my
          daily operating system and do all of my work here! I'm a fan of
          open-source projects and love contributing to such! I also really like
          helping people out with coding-related problems.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say
            <a href="mailto:plizNoSp4m@domain.tld">Hi</a>
            or find me on other platforms:
            <a href="https://dribbble.com/LekoArts">Dribbble</a>
&
<a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by
          <a href="https://www.lekoarts.de">LekoArts</a>
.
</Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
