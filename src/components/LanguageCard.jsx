import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import tw from 'tailwind.macro';

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:pb-24 text-white self-center`};
  background: ${props => props.bg};
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw`text-white uppercase text-3xl md:text-3xl xl:text-4xl tracking-wide font-sans pb-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  ${tw`object-cover relative rounded-lg`}
  top: -4rem;
  width: 50%;
  height: 50%;
  margin: 5px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    width: 60%;
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  ${tw`w-full flex align-center justify-center flex-row flex-wrap`}
`;

const LanguageCard = ({ title, link, children, bg, img }) => {
  if (!img) {
    return (
      <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
      <ImageWrapper>
        {img.map(i => (
          <Image src={i} />
        ))}
      </ImageWrapper>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default LanguageCard;

LanguageCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired
};
