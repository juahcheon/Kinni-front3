import Modal from '@components/Modal';
import useSocket from '@hooks/useSocket';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import gravatar from 'gravatar';
import React, { VFC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';


import {
  BottomNav,
  Container,
  Header,
  KinniBtn,
  LeftMenu,
  LogOutButton,
  ProfileImg,
  Workspaces,
} from './styles';


const Workspace: VFC = () => {
  const params = useParams<{ workspace?: string }>();
  const { workspace } = params;
  const [socket, disconnect] = useSocket(workspace);
  const { data: userData, error, mutate } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000,
  });
  const { data: channelData } = useSWR<IChannel[]>(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);
  const [showCreateKinniModal, setShowCreateKinniModal] = useState(false);
  const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);

  useEffect(() => {
    if (channelData && userData && socket) {
      socket.emit('login', { id: userData.id, channels: channelData.map((v) => v.id) });
    }
  }, [socket, channelData, userData]);

  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      })
  }, [mutate]);

  const onClickCreateKinni = useCallback(() => {
    setShowCreateKinniModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateKinniModal(false);
    setShowCreateChannelModal(false);
    setShowInviteWorkspaceModal(false);
  }, []);

  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect, workspace]);
  
  useEffect(() => {
    if (channelData && userData && socket) {
      socket.emit('login', { id: userData.id, channels: channelData.map((v) => v.id) });
    }
  }, [socket, userData, channelData]);

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header>
        {userData && (
          <LeftMenu>
            <ProfileImg src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />
            <LogOutButton onClick={onLogOut}>LOGOUT</LogOutButton>
            <p>KINNI</p>
          </LeftMenu>
        )}
      </Header>

      <BottomNav>
        <button onClick={refreshPage}>
          <i className="fa-solid fa-house"></i>
        </button>
        <button type="button" className="searchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
        <a href="#"><i className="fa-solid fa-bell"></i></a>
        <Link to="/front/pages/MyPage"><i className="fa-solid fa-user"></i></Link>
      </BottomNav>
      <Workspaces>
        <KinniBtn onClick={onClickCreateKinni}>
          <p>+</p>
        </KinniBtn>
      </Workspaces>
      <Modal show={showCreateKinniModal} onCloseModal={onCloseModal}>
      </Modal>
      <ToastContainer position="bottom-center" />
    </Container>
  );
};

export default Workspace;