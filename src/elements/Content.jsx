import styled from '@emotion/styled';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import tw from 'tailwind.macro';

const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`;

export default Content;
