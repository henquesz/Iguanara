import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Breadcrumb,
  Card,
  Col,
  Divider,
  Layout,
  List,
  Menu,
  Row,
  Typography,
} from "antd";
import logo from "../img/3.jpg";

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
];

const HomeComponent = () => {
    const db = getFirestore();

        const { id } = useParams(); // Obtém o ID da URL
        const [userData, setUserData] = useState(null);
      
        useEffect(() => {
          const fetchUserData = async () => {
            try {
              const userDocRef = doc(db, 'users', id);
              const userDoc = await getDoc(userDocRef);
              if (userDoc.exists()) {
                setUserData(userDoc.data());
              } else {
                console.log('Usuário não encontrado');
              }
            } catch (error) {
              console.error('Erro ao buscar informações do usuário:', error);
            }
          };
      
          fetchUserData();
        }, [id]);
      
        if (!userData) {
          return null;
        }

    const objetoRecuperado = sessionStorage.getItem("UserInfo");

  const items1 = [
    { key: 1, label: "Home" },
    { key: 2, label: "Perfil" },
    { key: 3, label: "Informações" },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            minHeight: 280,
            padding: "100px",
            borderRadius: "8px",
          }}
        >
          <div style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
              {/* Lado Esquerdo */}
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingRight: "20px",
                }}
              >
                {/* Card com Foto */}
                <Card style={{ width: "100%", textAlign: "center" }}>
                  <img
                    src={userData.profilePicture}
                    alt="Profile"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Card>

                {/* Card com Informações */}
                <Card style={{ width: "100%", marginTop: "2%" }}>
                  <Title level={5}>Nome</Title>
                  <Paragraph>{userData.name}</Paragraph>

                  <Title level={5}>E-mail</Title>
                  <Paragraph>{userData.email}</Paragraph>

                  <Title level={5}>Sobre mim</Title>
                  <Paragraph>Lorem Ipsum</Paragraph>

                  <Title level={5}>Empresa</Title>
                  <Paragraph>Iguanara</Paragraph>

                  <Title level={5}>Faculdade Atual</Title>
                  <Paragraph>Universidade de São Paulo</Paragraph>

                  <Title level={5}>Localização</Title>
                  <Paragraph>São Paulo, Brasil</Paragraph>
                </Card>
              </Col>

              {/* Lado Direito */}
              <Col
                span={16}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card style={{ width: "100%", height: "100%" }}>
                  <Divider orientation="left">Experiência</Divider>
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                  <Divider></Divider>

                  <Divider orientation="left">Formação</Divider>
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                  <Divider></Divider>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Iguanara ©{new Date().getFullYear()} Created by Vinicius Henques
      </Footer>
    </Layout>
  );
};

export default HomeComponent;
