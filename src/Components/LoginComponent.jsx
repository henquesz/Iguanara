import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import logo from "../img/3.jpg"
import { auth, GithubAuthProvider, signInWithPopup, db } from '../Firebasse';
import {doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { useGithubLogin } from '../Routes/LoginRoute';

const { Title, Paragraph } = Typography;

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleGithubLogin = useGithubLogin();

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
          <br></br>
          <Paragraph style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px', color:"white" }}>
          By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default LoginComponent;