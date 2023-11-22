import React, { FC, useCallback, useState } from "react";
import { AddButton, Buttons, CloseModalButton, CreateModal, ModalContents } from "./styles";
import { Label, ProfileImgKinni, Textarea } from "@layouts/Workspace/styles";
import gravatar from 'gravatar';
import useSWR from "swr";
import { IUser } from "@typings/db";
import fetcher from "@utils/fetcher";
import axios from "axios";
import { toast } from "react-toastify";
import useInput from "@hooks/useInput";

interface Props {
  show: boolean;
  onCloseModal: () => void;
}
const Modal: FC<Props> = ({show, onCloseModal}) => {
  const [content, setContent] = useState('');
  const { data: userData, error, mutate } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000,
  });
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onCreateKinni = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post('/api/workspaces', {
        })
        .then(() => {
          mutate();
          setShowCreateWorkspaceModal(false);
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal>
      <div onClick={stopPropagation}>
        <Buttons>
          <CloseModalButton onClick={onCloseModal}>취소</CloseModalButton>
          <AddButton onClick={onCreateKinni}>KINNI</AddButton>
        </Buttons>
        <ModalContents>
          {userData && 
            <ProfileImgKinni src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.nickname} />}
          <Textarea 
            id="workspace" 
            placeholder='What is happening?!' 
            spellCheck="false" 
            value={content}
            onChange={(e) => setContent(e.target.value)} />
        </ModalContents>
      </div>
    </CreateModal>
  );
};

export default Modal;