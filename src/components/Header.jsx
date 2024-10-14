import React from 'react';
import { Layout } from 'antd';
import estadisticasImage from '../assets/Ciencia-de-Datos.jpeg';

const { Header: AntHeader } = Layout;

const AppHeader = () => {
  return (
    <AntHeader
      style={{
        padding: 30,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={estadisticasImage}
        alt="Estadística en la tecnología"
        style={{
          height: 50,
          marginRight: 20,
        }}
      />
      <h1 style={{ margin: 0, fontSize: '24px', color: 'black' }}>
        La Estadística en la Tecnología
      </h1>
    </AntHeader>
  );
};

export default AppHeader;

