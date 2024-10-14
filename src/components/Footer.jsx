// src/components/Footer.jsx
import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const AppFooter = () => {
  return (
    <AntFooter
      style={{
        textAlign: 'center',
        background: 'white',
      }}
    >
        Created by © <br />
        Alejandra Sanches Alias JUANCHEZ <br />
        Roy Bertony Herrera Vicente 1490-23-22849
    </AntFooter>
  );
};

export default AppFooter;
