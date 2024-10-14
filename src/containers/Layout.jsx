// src/containers/Layout.jsx
import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import AppSider from '../components/Sider';

const MainLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <AppSider />
      <Layout style={{ marginInlineStart: 192, height: '98.25vh' }}>
        <AppHeader />
        <Layout.Content
          style={{
            margin: '24px 16px 0',
            overflowY: 'scroll',
            overflowX: 'hidden',
            padding: 20,
          }}
        >
          {children}
        </Layout.Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
