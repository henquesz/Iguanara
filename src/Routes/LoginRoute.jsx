import React from 'react';
import { auth, GithubAuthProvider, signInWithPopup, db } from '../Firebasse';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const useGithubLogin = () => {
  const navigate = useNavigate();

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      const userDocRef = doc(db, 'users', user.reloadUserInfo.screenName);

      const userData = {
        SelectedPreference: 'GitHub',
        name: user.displayName || 'N/A',
        email: user.email || 'N/A',
        profilePicture: user.photoURL || 'N/A',
        indendity: user.reloadUserInfo.screenName,
        createdAt: new Date(),
      };

      console.log('Dados do usuário a serem salvos:', userData);

      await setDoc(userDocRef, userData);

      sessionStorage.setItem("Token", user.accessToken);
      sessionStorage.setItem("UserInfo", JSON.stringify(user));
      navigate(`/user/${user.reloadUserInfo.screenName}`);
    } catch (error) {
      console.error('Erro ao fazer login com GitHub: ', error);
    }
  };

  return handleGithubLogin;
};

export { useGithubLogin };