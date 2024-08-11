import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import logo from "../img/3.png"
import { auth, GithubAuthProvider, signInWithPopup } from '../Firebasse';

const { Title, Paragraph } = Typography;

const LoginComponent = () => {

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuário logado: ', user);
      // Aqui você pode redirecionar ou salvar o usuário no estado global
    } catch (error) {
      console.error('Erro ao fazer login com GitHub: ', error);
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <Row style={{ height: '100%' }}>
        {/* Lado Esquerdo */}
        <Col
          span={12}
          style={{
            backgroundColor: '#5a189a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            color: '#fff',
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: '100%', height: 'auto', marginBottom: 'auto', marginTop:"10%" }}
          />
          <Paragraph style={{ marginTop: 'auto', textAlign: 'center', color: "white" }}>
            “Supere a dor; desistir dói bem mais.” <br /> – Vegeta, Dragon Ball
          </Paragraph>
        </Col>

        {/* Lado Direito */}
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px',
            backgroundColor: "#2d2d2d"
          }}
        >
          <Title style={{color:"white"}} level={3}>Create an account and Login</Title>
          <Paragraph style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px', color:"white" }}>
            Faça sua autenticação pelo seu github
          </Paragraph>
          <Button
            type="primary"
            icon={<GithubOutlined />}
            size="large"
            style={{ width: '100%', maxWidth: '300px', background:"white", color:"black" }}
            onClick={handleGithubLogin}
          >
            Sign with GitHub
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LoginComponent;