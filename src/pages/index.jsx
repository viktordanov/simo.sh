import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import tw from 'tailwind.macro';
import LanguageCard from '../components/LanguageCard';
// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
// Elements
import Inner from '../elements/Inner';
import { BigTitle, Subtitle, Title } from '../elements/Titles';
// Images
import avatar from '../images/avatar.png';
import csharp from '../images/cs.png';
import css from '../images/css.png';
import docker from '../images/docker.png';
import dp from '../images/dplogo.png';
import etg from '../images/etgscrot.png';
import go from '../images/go.png';
import html from '../images/html.png';
import lb from '../images/iphonex.png';
import java from '../images/java.png';
import javascript from '../images/js.png';
import linux from '../images/linux.png';
import nodejs from '../images/node.png';
import osugit from '../images/osugit.png';
import osuspeed from '../images/osuspeed.png';
import postbank from '../images/postbank.png';
import py from '../images/python.png';
import react from '../images/react.png';
import mysql from '../images/sql.png';
import typescript from '../images/ts.png';
// Views
import About from '../views/About';
import Contact from '../views/Contact';
// Views
import Hero from '../views/Hero';
import Languages from '../views/Languages';
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

const LanguagesWrapper = styled.div`
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
    <Parallax pages={7}>
      <Hero offset={0}>
        <BigTitle>
          Sup,
          <br />
          I'm Simo Aleksandrov.
        </BigTitle>
        <Subtitle>Web & Mobile Developer from Ruse, Bulgaria</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects 📎</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Delirium Products!"
            link="https://deliriumproducts.me"
            bg="linear-gradient(to right, #DF6161 0%, #F56D6D 100%)"
            img={[dp]}
          >
            🍫 Software development team established in Ruse, Bulgaria.
          </ProjectCard>
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
            to wait for waiters.
          </ProjectCard>
          <ProjectCard
            title="Postbank Calendar"
            link="https://github.com/deliriumproducts/postbank-calendar"
            bg="linear-gradient(to right, rgba(57,94,185,1) 20%, #6ca3fc 80%)"
            img={[postbank]}
          >
            📅 Mobile calendar, made for Postbank. Available on Android and iOS.
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
            using NF!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Languages offset={3.75}>
        <Title>Languages and Technologies 📚</Title>
        <LanguagesWrapper>
          <LanguageCard
            title="React.js"
            link="https://reactjs.org"
            bg="linear-gradient(to right, #13c5f4  0%, #33cef7 100%)"
            img={[react]}
          />
          <LanguageCard
            title="TypeScript"
            link="https://typescriptlang.org"
            bg="linear-gradient(to right, #2b92e2 0%, #61aae2 100%)"
            img={[typescript]}
          />
          <LanguageCard
            title="JavaScript"
            bg="linear-gradient(to right, #f4f481  0%, #f4f450 100%)"
            img={[javascript]}
          />
          <LanguageCard
            title="node.js"
            link="https://nodejs.org"
            bg="linear-gradient(to right, #58e898  0%, #84edb3 100%)"
            img={[nodejs]}
          />
          <LanguageCard
            title="HTML"
            bg="linear-gradient(to right, #c94028 0%, #ea6f59 100%)"
            img={[html]}
          />
          <LanguageCard
            title="CSS"
            bg="linear-gradient(to right, #40a5d6  0%, #279ed8 100%)"
            img={[css]}
          />
          <LanguageCard
            title="C#"
            link="https://docs.microsoft.com/en-us/dotnet/csharp/"
            bg="linear-gradient(to right, #a728c1  0%, #d84ef4 100%)"
            img={[csharp]}
          />
          <LanguageCard
            title="MySQL"
            link="https://www.mysql.com/"
            bg="linear-gradient(to right, #297e9b  0%, #2fadd8 100%)"
            img={[mysql]}
          />
          <LanguageCard
            title="Docker"
            link="https://docker.com/"
            bg="linear-gradient(to right, #0C76C9  0%, #48a3ea 100%)"
            img={[docker]}
          />
          <LanguageCard
            title="Linux"
            link="https://linux.org/"
            bg="linear-gradient(to right, #303030 0%, #505050 100%)"
            img={[linux]}
          />
          <LanguageCard
            title="Python"
            link="https://python.org/"
            bg="linear-gradient(to right, #3A75AA  0%, #5a9fdd 100%)"
            img={[py]}
          />
          <LanguageCard
            title="Go"
            link="https://golang.org/"
            bg="linear-gradient(to right, #67D5E0 0%, #5de7f4  100%)"
            img={[go]}
          />
          <LanguageCard
            title="Java"
            link="https://java.com/"
            bg="linear-gradient(to right, #f79551 0%, #f4a56e  100%)"
            img={[java]}
          />
        </LanguagesWrapper>
      </Languages>
      <About offset={5}>
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
      <Contact offset={6}>
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
