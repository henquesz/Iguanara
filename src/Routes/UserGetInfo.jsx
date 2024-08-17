import axios from "axios";
import React, { useEffect, useState } from "react";
import { auth, GithubAuthProvider, signInWithPopup, db } from "../Firebasse";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const getGithubUserInfo = async (id) => {
  try {
    const githubUserResponse = await axios.get(`https://api.github.com/users/${id}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    return githubUserResponse.data;
  } catch (error) {
    console.error("Erro ao buscar informações do usuário no GitHub:", error);
  }
};

const getGithubUserRepos = async (id) => {
  try {
    const githubReposResponse = await axios.get(`https://api.github.com/users/${id}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    return githubReposResponse.data;
  } catch (error) {
    console.error("Erro ao buscar repositórios do usuário no GitHub:", error);
  }
};

const UserGetInfo = async (id) => {
  let User;
  console.log("ID capturado:", id);
  if (!id) {
    console.error("ID é undefined");
    return;
  }

  let GeneralInfo = "";
  let GithubUserInfo = "";
  let GithubRepos = "";

  try {
    const userDocRef = doc(db, "users", id);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      GeneralInfo = userDoc.data();
    } else {
      console.log("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar informações do usuário:", error);
  }

  GithubUserInfo = await getGithubUserInfo(id);
  GithubRepos = await getGithubUserRepos(id);

  User = {
    ...GeneralInfo,
    githubUserInfo: GithubUserInfo,
    githubRepos: GithubRepos
  };

  console.log(User);

  return User;
};

export { UserGetInfo };