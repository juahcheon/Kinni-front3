import { ProfileImg } from "@layouts/Workspace/styles";
import { Container, Kinni } from "@pages/KinniPage/styels";
import { IUser } from "@typings/db";
import fetcher from "@utils/fetcher";
import React from "react";
import useSWR from "swr";
import gravatar from 'gravatar';

const KinniPage = () => {
  const { data: userData, mutate: revalidateUser } = useSWR<IUser | false>('/api/users', fetcher);

  return (
    <Container>
      <div>
        <button></button>
        <button></button>
      </div>
      {userData && (
        <Kinni>
          <ProfileImg src={gravatar.url(userData.email, { s: '30px', d: 'retro' })} alt={userData.nickname} />
        </Kinni>
      )}
      
    </Container>
  );
};

export default KinniPage;