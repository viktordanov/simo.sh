import { Global } from '@emotion/core';
import React from 'react';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import GlobalStyle from '../styles/global';
import SEO from './SEO';

const Layout = () => (
  <>
    <SEO />
    <Global styles={GlobalStyle} />
  </>
);

export default Layout;
