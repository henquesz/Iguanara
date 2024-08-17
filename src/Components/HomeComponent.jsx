import React, { useEffect, useState } from "react";
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
  Segmented,
  Tag,
  Typography,
} from "antd";
import logo from "../img/3.jpg";
import wallpaper from "../img/wallpaper.jpg";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { UserGetInfo } from "../Routes/UserGetInfo";
import { StarOutlined } from "@ant-design/icons";

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
  const { id } = useParams(); // Obtém o ID da URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = await UserGetInfo(id); // Passa o ID diretamente
      setUserData(userInfo);
      console.log(userInfo); // Atualiza o estado com os dados do usuário
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
    { key: 4, label: "Configurações" },
  ];

  const RepoData = userData.githubRepos;

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
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
        <div style={{ width: "100%" }}>
          <img
            src={wallpaper}
            alt="Logo"
            style={{
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
              height: "40vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            minHeight: 280,
            padding: "100px",
            borderRadius: "8px",
          }}
        >
          <div style={{ height: "100%", marginTop: "-20%" }}>
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
                <Card
                  style={{ width: "100%", marginTop: "2%", color: "white" }}
                >
                  <Segmented
                    options={[
                      `Followers: ${userData.githubUserInfo.followers}`,
                      `Following: ${userData.githubUserInfo.following}`,
                    ]}
                    block
                  />
                  <Title level={5} style={{ color: "white" }}>
                    Username
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    {userData.indendity}
                  </Paragraph>

                  <Title level={5} style={{ color: "white" }}>
                    E-mail
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    {userData.email}
                  </Paragraph>

                  <Title level={5} style={{ color: "white" }}>
                    Sobre mim
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    {userData.githubUserInfo.bio}
                  </Paragraph>

                  <Title level={5} style={{ color: "white" }}>
                    Empresa
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    {userData.githubUserInfo.company}
                  </Paragraph>

                  <Title level={5} style={{ color: "white" }}>
                    Faculdade Atual
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    aplicar posteriormente
                  </Paragraph>

                  <Title level={5} style={{ color: "white" }}>
                    Localização
                  </Title>
                  <Paragraph style={{ color: "grey" }}>
                    {userData.githubUserInfo.location}
                  </Paragraph>
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
                  <Title
                    level={1}
                    style={{ color: "white", paddingLeft: "5%" }}
                  >
                    {userData.name}
                  </Title>
                  <Divider orientation="left" style={{ color: "white" }}>
                    Experiência
                  </Divider>
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
                          title={
                            <a
                              href="https://ant.design"
                              style={{ color: "white" }}
                            >
                              {item.title}
                            </a>
                          }
                          description={
                            <span style={{ color: "grey" }}>
                              Ant Design, a design language for background
                              applications, is refined by Ant UED Team
                            </span>
                          }
                        />
                      </List.Item>
                    )}
                  />
                  <Divider></Divider>

                  <Divider orientation="left" style={{ color: "white" }}>
                    Formação
                  </Divider>
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
                          title={
                            <a
                              href="https://ant.design"
                              style={{ color: "white" }}
                            >
                              {item.title}
                            </a>
                          }
                          description={
                            <span style={{ color: "grey" }}>
                              Ant Design, a design language for background
                              applications, is refined by Ant UED Team
                            </span>
                          }
                        />
                      </List.Item>
                    )}
                  />
                  <Divider></Divider>
                  <Divider orientation="left" style={{ color: "white" }}>
                    Repositórios
                  </Divider>
                  <div style={{maxHeight:"350px", overflow: "auto"}}>
                  <List
                    itemLayout="horizontal"
                    dataSource={RepoData}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png`}
                            />
                          }
                          title={<a style={{ color: "white" }} href={item.html_url}>{item.name}</a>}
                          description={
                            <div style={{ color: "grey" }}>
                              <p>{item.language} - {item.pushed_at}</p>
                              <p>
                                <StarOutlined style={{ color: "yellow" }} /> {item.stargazers_count}
                              </p>
                              <div>
                                {item.topics.map((topic, idx) => (
                                  <Tag color="processing" key={idx} style={{ marginRight: 4, background:"none" }}>
                                    {topic}
                                  </Tag>
                                ))}
                              </div>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                  </div>
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
